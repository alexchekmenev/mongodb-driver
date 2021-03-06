const { rewrite: rewriteWhere } = require('./rewriters/WhereRewriter')
const { rewrite: rewriteSelect } = require('./rewriters/SelectRewriter')
const { rewrite: rewriteGroup } = require('./rewriters/GroupRewriter')
const { rewrite: rewriteOrder } = require('./rewriters/OrderRewriter')
const { rewriteTableName } = require('./rewriters/CommonRewriter')

module.exports = {
    rewrite
}

/**
 * Returns MongoDb collection name and aggregation pipeline
 * @param sqlQuery {object}
 * @returns {{collectionName: string, pipeline: Array}}
 */
function rewrite(sqlQuery) {
    if (!sqlQuery.from) {
        throw new Error('Could not determine table')
    }

    const collectionName = rewriteTableName(sqlQuery.from)

    // pipeline stages order according to - https://docs.mongodb.com/manual/core/aggregation-pipeline-optimization/
    const pipeline = []

    /* $match stage */

    const matchStage = rewriteWhere(sqlQuery.where)
    if (matchStage) {
        pipeline.push({ $match: matchStage })
    }

    /* $group + $project + $sort stages */

    const elementsByHash = new Map()
    const selectContainer = rewriteSelect(sqlQuery.select, elementsByHash)
    const groupContainer = rewriteGroup(sqlQuery.group, elementsByHash, selectContainer)
    const orderContainer = rewriteOrder(sqlQuery.order, elementsByHash, selectContainer)
    const { groupStage, projectStage, sortStage} = constructStages(selectContainer, groupContainer, orderContainer)

    pipeline.push({ $group: groupStage }, { $project: projectStage })
    if (sortStage) {
        pipeline.push({ $sort: sortStage })
    }

    /* $skip + $limit stages */

    if (sqlQuery.offset) {
        pipeline.push({ $skip: sqlQuery.offset })
    }
    if (sqlQuery.limit) {
        pipeline.push({ $limit: sqlQuery.limit })
    }

    return { collectionName, pipeline }
}

// TODO GROUP BY `columnName`. now it's parsed as constant string
// TODO ORDER BY `columnName` and alias (uid). now it's parsed as constant string
function constructStages(selectContainer, groupContainer, orderContainer) {
    const queryHasAggregations = selectContainer.hasAggregationFunction

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

        const projectingUid = selectElement.uid ? selectElement.uid : selectElement.getHash()
        if (groupIndexHashIds.has(selectElement.hashId)) {
            projectFields[projectingUid] = `$_id.<${selectElement.hashId}>`
        } else {
            let groupFieldValue = selectElement.compiled
            if (queryHasAggregations && !selectElement.isAggregationFunction) {
                groupFieldValue = { $first: selectElement.compiled }
            }
            groupFields[`<${selectElement.hashId}>`] = groupFieldValue
            projectFields[projectingUid] = `$<${selectElement.hashId}>`
        }
        projectFieldsHashIds.set(selectElement.hashId, projectingUid)
    }

    // For now support ordering only by simple fields
    // TODO add expression fields -> calc resulted expressions on group stage + project to order stage
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
