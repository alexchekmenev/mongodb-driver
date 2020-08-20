const {
    OrderElement,
    SelectElementContainer
} = require('../SelectElementContainer')

module.exports = {
    rewrite
}

/**
 *
 * @param rawOrderExpressions {object[]}
 * @param hashMap {Map}
 * @param selectContainer {SelectElementContainer}
 * @returns {SelectElementContainer}
 */
function rewrite(rawOrderExpressions, hashMap, selectContainer) {
    const container = new SelectElementContainer(hashMap) // TODO new ExpressionContainer(hashMap) ?
    for (let i = 0; i < rawOrderExpressions.length; i++) {
        const orderExpression = rewriteOrderExpression(rawOrderExpressions[i], selectContainer)
        container.setSelectElement(i + 1, orderExpression)
    }
    return container
}

/**
 *
 * @param expressionWithOrder
 * @param selectContainer
 * @returns {OrderElement}
 */
// for now - only simple fields
// FIXME add expression fields -> calc resulted expressions on group stage + project to order stage
function rewriteOrderExpression(expressionWithOrder, selectContainer) {
    const expression = expressionWithOrder.expression
    const order = expressionWithOrder.order
    let compiled = null
    if (expression.hasOwnProperty('constant')) { // ORDER BY 1, 2
        const position = parseInt(expression.constant)
        compiled = selectContainer.getByReference(position).compiled
    } else {
        compiled = rewriteExpression(expression)
    }
    return new OrderElement(expression, compiled, order)
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
