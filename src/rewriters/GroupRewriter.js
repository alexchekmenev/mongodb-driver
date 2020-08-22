const { GroupElement, ElementContainer } = require('../ElementContainer')
const { rewriteExpression } = require('./CommonRewriter')

module.exports = {
    rewrite
}

/**
 *
 * @param rawGroupExpressions {object[]}
 * @param hashMap {Map}
 * @param selectContainer {ElementContainer}
 * @returns {ElementContainer}
 */
function rewrite(rawGroupExpressions, hashMap, selectContainer) {
    const container = new ElementContainer(hashMap)
    for (let i = 0; i < rawGroupExpressions.length; i++) {
        const groupExpression = rewriteGroupByExpression(rawGroupExpressions[i], selectContainer)
        container.setElement(i + 1, groupExpression)
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
    // omit "order" because MongoDB does not support ordering on $group stage
    let compiled
    if (expression.hasOwnProperty('constant')) {
        const position = parseInt(expression.constant)
        compiled = selectContainer.getByReference(position).compiled
    } else {
        compiled = rewriteExpression(expression)
    }
    return new GroupElement(expression, compiled)
}
