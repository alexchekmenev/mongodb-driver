const { rewrite: rewriteWhere } = require('./rewriters/WhereRewriter')
const { rewrite: rewriteSelect } = require('./rewriters/SelectRewriter')
const { rewrite: rewriteGroup } = require('./rewriters/GroupRewriter')
const { rewrite: rewriteOrder } = require('./rewriters/OrderRewriter')
const { getHash } = require('./CompilerUtils')

class QueryRewriter {

    /**
     * Returns MongoDb collection name and aggregation pipeline
     * @param sqlQuery {object}
     * @returns {{collectionName: string, pipeline: Array}}
     */
    rewrite(sqlQuery) {
        if (!sqlQuery.from) {
            throw new Error('Could not determine table')
        }

        const collectionName = rewriteTableName(sqlQuery.from)
        const matchStage = rewriteWhere(sqlQuery.where)

        const hashMap = new Map()
        const selectContainer = rewriteSelect(sqlQuery.select, hashMap)
        // console.log('selectContainer', selectContainer.entries())
        const groupContainer = rewriteGroup(sqlQuery.group, hashMap, selectContainer)
        // console.log('groupContainer', groupContainer.entries())
        const orderContainer = rewriteOrder(sqlQuery.order, hashMap, selectContainer)
        // console.log('orderContainer', orderContainer.entries())
        const {
            groupStage,
            projectStage,
            sortStage
        } = construct(selectContainer, groupContainer, orderContainer)

        // TODO https://docs.mongodb.com/manual/core/aggregation-pipeline-optimization/
        // TODO switch $project and $sort stage
        const pipeline = [
            { $match: matchStage },
            { $group: groupStage },
            { $project: projectStage },
        ]
        if (sortStage) {
            pipeline.push({ $sort: sortStage })
        }
        if (sqlQuery.offset) {
            pipeline.push({ $skip: sqlQuery.offset })
        }
        if (sqlQuery.limit) {
            pipeline.push({ $limit: sqlQuery.limit })
        }

        return { collectionName, pipeline }
    }
}

/* Rewriting functions */

function rewriteTableName(name) {
    return name.replace(/[.\s$]+/g, '_')
}

function construct(selectContainer, groupContainer, orderContainer) {
    const queryHasAggregations = true // TODO selectContainer.hasAggregationFunction()

    const groupIndex = { _id: queryHasAggregations ? null : "$_id" }
    const groupIndexHashIds = new Set()
    if (groupContainer.size > 0) {
        groupIndex._id = {}
        for (let pos = 1; pos <= groupContainer.size; pos++) {
            const groupElement = groupContainer.getByReference(pos)
            groupIndex._id[`<${groupElement.hashId}>`] = groupElement.compiled
            groupIndexHashIds.add(groupElement.hashId)
        }
    }

    const groupFields = {}
    const projectFields = { _id: 0 }
    const projectFieldsHashIds = new Map()
    for (let pos = 1; pos <= selectContainer.size; pos++) {
        const selectElement = selectContainer.getByReference(pos)

        const projectingUid = selectElement.uid ? selectElement.uid : getHash(selectElement)
        if (groupIndexHashIds.has(selectElement.hashId)) {
            projectFields[projectingUid] = `$_id.<${selectElement.hashId}>`
        } else {
            let groupFieldValue = selectElement.compiled
            if (queryHasAggregations /* &&  element is not aggregating function */) {
                // TODO wrap select element without aggregating function  by { $first: ... }
                // groupFieldValue = ...
            }
            groupFields[`<${selectElement.hashId}>`] = groupFieldValue
            projectFields[projectingUid] = `$<${selectElement.hashId}>`
        }
        projectFieldsHashIds.set(selectElement.hashId, projectingUid)
    }

    const sortFields = {}
    for (let pos = 1; pos <= orderContainer.size; pos++) {
        const orderElement = orderContainer.getByReference(pos)
        if (projectFieldsHashIds.has(orderElement.hashId)) {
            const projectingUid = projectFieldsHashIds.get(orderElement.hashId)
            sortFields[projectingUid] = orderElement.sortOrder
        }
    }

    const groupStage = {
        ...groupIndex,
        ...groupFields
    }

    const projectStage = {
        ...projectFields
    }

    const sortStage = Object.keys(sortFields).length === 0 ? null : {
        ...sortFields
    }

    return { groupStage, projectStage, sortStage }
}

module.exports = QueryRewriter
