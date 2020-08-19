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
        sqlQuery.group = rewriteGroup(sqlQuery.group)
        sqlQuery.select = rewriteSelect(sqlQuery.select)

        const mapper = getExpressionToFieldMapper(sqlQuery.select, sqlQuery.group)
        console.log(mapper.values())

        const pipeline = [
            { $match: constructMatchStage(sqlQuery.where) },
            { $group: constructGroupStage(sqlQuery.group, sqlQuery.select, mapper) },
            { $project: constructProjectStage(sqlQuery.select, mapper) }
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

function rewriteGroup(group) {
    return group.map(e => rewriteGroupByExpression(e))
}

// function rewriteHaving(having) {
// TODO
// }

function rewriteSelect(select) {
    return select.map(e => {
        const rewritten = rewriteSelectElement(e)
        if (!rewritten.hasOwnProperty('$sum')) {
            return { $first: rewritten }
        }
        return rewritten
    })
}

function rewriteOrder(order) {
    return order.map(e => rewriteOrderExpression(e))
}

function rewriteLimit(limit) {
    // TODO
}

function rewriteGroupByExpression(expressionWithOrder) {
    // omit "order" because of MongoDB does not support ordering in GROUP BY
    return rewriteExpression(expressionWithOrder.expression)
}

// FIXME only simple fields
function rewriteOrderExpression(expressionWithOrder) {
    // TODO some kind of rewriteSelectElement(...) + calc resulted fields on group stage
}

function rewriteSelectElement(element) {
    if (element.hasOwnProperty('fullColumnName')) {
        return rewriteColumnName(element.fullColumnName)
    } else if (element.hasOwnProperty('expression')) {
        return rewriteExpression(element.expression)
    } else if (element.hasOwnProperty('functionCall')) {
        return rewriteExpression(element.functionCall)
    }
    throw new Error('Rewriter do not support this type of select element')
}

function rewriteExpression(expression) {
    const recursiveRewrite = function (e) {
        if (Array.isArray(e)) {
            return e.map((item) => recursiveRewrite(item))
        } else if (typeof e === 'object') {
            if (e.hasOwnProperty('columnName')) {
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

function getExpressionToFieldMapper(selectExpressions, groupExpressions) {
    const map = new Map()
    let counter = 1
    for (const e of selectExpressions) {
        const key = getExpressionKey(e)
        if (!map.has(key)) {
            map.set(key, {
                e,
                type: 'select',
                tempId: `<field_${counter++}>`,
                projectionField: e.uid || key
            })
        }
    }
    for (const e of groupExpressions) {
        const key = getExpressionKey(e)
        if (!map.has(key)) {
            map.set(key, {
                e,
                type: 'group',
                tempId: `<field_${counter++}>`,
                projectionField: e.uid || key
            })
        }
    }
    return map
}

function getExpressionKey(element) {
    return JSON.stringify(element)
}

/* Constructing pipeline stages */

function constructMatchStage(where) {
    return rewriteExpression(where)
}


function constructGroupStage(group, select, mapper) {
    const groupIndex = { _id: null }
    if (group.length > 0) {
        // TODO
        //  move from _id.* in $project stage
        groupIndex._id = group.reduce((acc, e) => {
            const key = getExpressionKey(e)
            return {...acc, [mapper.get(key).tempId]: e}
        }, {})
    }
    const aggregationFields = select.reduce((acc, e) => {
        const key = getExpressionKey(e)
        // if (e.type === 'group') {
        //     return acc
        // }
        return {...acc, [mapper.get(key).tempId]: e}
    }, {})
    return {
        ...groupIndex,
        ...aggregationFields
    }
}

function constructProjectStage(select, mapper) {
    const stage = {
        _id: 0
    }
    mapper.forEach((value) => {
        if (value.type === 'group') {
            // stage[value.projectionField] = `$_id.${value.tempId}`
        } else {
            stage[value.projectionField] = `$${value.tempId}`
        }
    })
    return stage
}

module.exports = QueryRewriter
