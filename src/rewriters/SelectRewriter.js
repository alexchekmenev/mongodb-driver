const { SelectElement, ElementContainer } = require('../ElementContainer')
const { rewriteColumnName, rewriteExpression } = require('./CommonRewriter')

module.exports = {
    rewrite
}

/**
 *
 * @param rawSelectElements {object[]}
 * @param hashMap {Map}
 * @returns {ElementContainer}
 */
function rewrite(rawSelectElements, hashMap) {
    const container = new ElementContainer(hashMap)
    for (let i = 0; i < rawSelectElements.length; i++) {
        const selectElement = rewriteSelectElement(rawSelectElements[i])
        container.setElement(i + 1, selectElement)
    }
    return container
}

/**
 *
 * @param rawElement
 * @returns {SelectElement}
 */
function rewriteSelectElement(rawElement) {
    let compiled = null, isAggregationFunction = false
    if (rawElement.hasOwnProperty('fullColumnName')) {
        compiled = rewriteColumnName(rawElement.fullColumnName)
    } else if (rawElement.hasOwnProperty('expression')) {
        compiled = rewriteExpression(rawElement.expression)
    } else if (rawElement.hasOwnProperty('functionCall')) {
        isAggregationFunction = true
        compiled = rewriteExpression(rawElement.functionCall)
    } else {
        throw new Error('Rewriter do not support this type of select element')
    }
    let uid = rawElement.uid || null
    return new SelectElement(rawElement, compiled, uid, isAggregationFunction)
}
