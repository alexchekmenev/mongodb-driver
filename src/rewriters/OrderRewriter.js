const { OrderElement, ElementContainer } = require('../ElementContainer')
const { rewriteExpression } = require('./CommonRewriter')

module.exports = {
    rewrite
}

/**
 *
 * @param rawOrderExpressions {object[]}
 * @param hashMap {Map}
 * @param selectContainer {ElementContainer}
 * @returns {ElementContainer}
 */
function rewrite(rawOrderExpressions, hashMap, selectContainer) {
    const container = new ElementContainer(hashMap)
    for (let i = 0; i < rawOrderExpressions.length; i++) {
        const orderExpression = rewriteOrderExpression(rawOrderExpressions[i], selectContainer)
        container.setElement(i + 1, orderExpression)
    }
    return container
}

/**
 *
 * @param expressionWithOrder
 * @param selectContainer
 * @returns {OrderElement}
 */
function rewriteOrderExpression(expressionWithOrder, selectContainer) {
    const expression = expressionWithOrder.expression
    const order = expressionWithOrder.order
    let compiled
    if (expression.hasOwnProperty('constant')) {
        const position = parseInt(expression.constant)
        compiled = selectContainer.getByReference(position).compiled
    } else {
        compiled = rewriteExpression(expression)
    }
    return new OrderElement(expression, compiled, order)
}
