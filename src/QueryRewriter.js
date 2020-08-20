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
        sqlQuery.where = rewriteWhere(sqlQuery.where)


        // const map = new Map()
        // const reversedMap = new Map()
        // let counter = 1

        const hashMap = new Map()
        const selectContainer = rewriteSelect(sqlQuery.select, hashMap)
        console.log('selectContainer', selectContainer.entries())
        const groupContainer = rewriteGroup(sqlQuery.group, hashMap, selectContainer)
        console.log('groupContainer', groupContainer.entries())
        const orderContainer = rewriteOrder(sqlQuery.order, hashMap, selectContainer)
        console.log('orderContainer', orderContainer.entries())

        // sqlQuery.select = rewriteSelect(sqlQuery.select)
        // getExpressionToFieldMapper(sqlQuery.select, 'select', {map, reversedMap}, counter)

        // sqlQuery.group = rewriteGroup(sqlQuery.group, reversedMap)
        // getExpressionToFieldMapper(sqlQuery.group, 'group', {map, reversedMap}, counter)

        // console.log('map', map.values())
        // console.log('reversedMap', reversedMap.values())

        const {
            groupStage,
            projectStage,
            sortStage
        } = construct(selectContainer, groupContainer, orderContainer)

        // TODO check optimal stages order
        const pipeline = [
            { $match: constructMatchStage(sqlQuery.where) },
            { $group: groupStage },
            { $project: projectStage },
            { $sort: sortStage }
            // TODO limit stage
        ]

        return { collectionName, pipeline }
    }
}

/* Rewriting functions */

function rewriteTableName(name) {
    return name.replace(/[.\s$]+/g, '_')
}

function rewriteColumnName(name) {
    return `$${name.columnName.replace(/[$]+/g, '')}`
}

function rewriteWhere(where) {
    return {
        $expr: rewriteExpression(where)
    }
}

// function rewriteGroup(group, reversedMap) {
//     return group.map(e => rewriteGroupByExpression(e, reversedMap))
// }

// function rewriteSelect(select) {
//     return select.map(e => {
//         const rewritten = rewriteSelectElement(e)
//         if (!rewritten.hasOwnProperty('$sum')) {
//             return { $first: rewritten }
//         }
//         return rewritten
//     })
// }

// function rewriteOrder(order) {
//     return order.map(e => rewriteOrderExpression(e))
// }

function rewriteLimit(limit) {
    // TODO
}

// function rewriteSelectElement(element) {
//     if (element.hasOwnProperty('fullColumnName')) {
//         return rewriteColumnName(element.fullColumnName)
//     } else if (element.hasOwnProperty('expression')) {
//         return rewriteExpression(element.expression)
//     } else if (element.hasOwnProperty('functionCall')) {
//         return rewriteExpression(element.functionCall)
//     }
//     throw new Error('Rewriter do not support this type of select element')
// }
//
// function rewriteGroupByExpression(expressionWithOrder, reversedMap) {
//     // omit "order" because of MongoDB does not support ordering in GROUP BY
//     const expression = expressionWithOrder.expression
//     if (expression.hasOwnProperty('constant')) { // GROUP BY 1, 2
//         return getIthFieldValue(reversedMap, expression.constant)
//     }
//     return rewriteExpression(expression)
// }

// // FIXME only simple fields
// function rewriteOrderExpression(expressionWithOrder) {
//     // ??? TODO some kind of rewriteSelectElement(...) + calc resulted fields on group stage
//     // TODO ORDER BY 1
// }

function rewriteExpression(expression) {
    const recursiveRewrite = function (e) {
        if (Array.isArray(e)) {
            return e.map((item) => recursiveRewrite(item))
        } else if (typeof e === 'object') {
            if (e.hasOwnProperty('constant')) {
                return e.constant
            } else if (e.hasOwnProperty('columnName')) {
                return rewriteColumnName(e)
            }
            return Object.keys(e).reduce((acc, key) => {
                return {...acc, [key]: recursiveRewrite(e[key])}
            }, {})
        } else if (typeof e === 'string') {
            return recursiveRewrite({ columnName: e})
        }
        return e
    }
    return recursiveRewrite(expression)
}

/* Expression to dynamic field mapping */

// function getExpressionToFieldMapper(expressions, type, maps, counter) {
//     const map = maps.map
//     const reversedMap = maps.reversedMap
//     for (const e of expressions) {
//         const key = getExpressionKey(e)
//         if (!map.has(key)) {
//             map.set(key, {
//                 e,
//                 type,
//                 tempId: getIthFieldName(counter),
//                 projectionField: e.uid || key
//             })
//             reversedMap.set(getIthFieldName(counter), e)
//             counter++
//         }
//     }
//     return {
//         map,
//         reversedMap
//     }
// }

// function getExpressionKey(element) {
//     return JSON.stringify(element)
// }

// function getIthFieldName(i) {
//     return `<field_${i}>`
// }

// function getIthFieldValue(reversedMap, i) {
//     return reversedMap.get(getIthFieldName(i))
// }

/* Constructing pipeline stages */

function constructMatchStage(where) {
    return where
}

// function constructGroupStage(group, select, mapper) {
//     const groupIndex = { _id: null }
//     if (group.length > 0) {
//         // TODO move from _id.* in $project stage
//         groupIndex._id = group.reduce((acc, e) => {
//             const key = getExpressionKey(e)
//             return {...acc, [mapper.get(key).tempId]: e}
//         }, {})
//     }
//     const aggregationFields = select.reduce((acc, e) => {
//         const key = getExpressionKey(e)
//         // if (e.type === 'group') {
//         //     return acc
//         // }
//         return {...acc, [mapper.get(key).tempId]: e}
//     }, {})
//     // TODO remove duplicated fields in _id (_id.<field_1> and <field_1>)
//     return {
//         ...groupIndex,
//         ...aggregationFields
//     }
// }

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
    const projectFields = {}
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

    const sortStage = {
        ...sortFields
    }

    return { groupStage, projectStage, sortStage }
}

// function constructProjectStage(select, mapper) {
//     const stage = {
//         _id: 0
//     }
//     mapper.forEach((value) => {
//         if (value.type === 'group') {
//             // stage[value.projectionField] = `$_id.${value.tempId}`
//         } else {
//             stage[value.projectionField] = `$${value.tempId}`
//         }
//     })
//     return stage
// }

module.exports = QueryRewriter
