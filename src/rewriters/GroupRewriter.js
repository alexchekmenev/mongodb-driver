const {
    GroupElement,
    SelectElement,
    SelectElementContainer
} = require('../SelectElementContainer')

module.exports = {
    rewrite
}

/**
 *
 * @param rawGroupExpressions {object[]}
 * @param hashMap {Map}
 * @param selectContainer {SelectElementContainer}
 * @returns {SelectElementContainer}
 */
function rewrite(rawGroupExpressions, hashMap, selectContainer) {
    const container = new SelectElementContainer(hashMap) // TODO new ExpressionContainer(hashMap) ?
    for (let i = 0; i < rawGroupExpressions.length; i++) {
        const groupExpression = rewriteGroupByExpression(rawGroupExpressions[i], selectContainer)
        container.setSelectElement(i + 1, groupExpression)
    }
    return container
}

/**
 *
 * @param expressionWithOrder
 * @param selectContainer
 * @returns {GroupElement}
 */
function rewriteGroupByExpression(expressionWithOrder, selectContainer) {
    const expression = expressionWithOrder.expression
    // omit "order" because of MongoDB does not support ordering in GROUP BY
    let compiled = null
    if (expression.hasOwnProperty('constant')) { // GROUP BY 1, 2
        const position = parseInt(expression.constant)
        compiled = selectContainer.getByReference(position).compiled
    } else {
        compiled = rewriteExpression(expression)
    }
    return new GroupElement(expression, compiled)
}

// Common

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

function rewriteColumnName(name) {
    return `$${name.columnName.replace(/[$]+/g, '')}`
}
