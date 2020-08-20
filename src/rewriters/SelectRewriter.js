const {
    SelectElement,
    SelectElementContainer
} = require('../SelectElementContainer')

module.exports = {
    rewrite
}

/**
 *
 * @param rawSelectElements {object[]}
 * @param hashMap {Map}
 * @returns {SelectElementContainer}
 */
function rewrite(rawSelectElements, hashMap) {
    const container = new SelectElementContainer(hashMap)
    for (let i = 0; i < rawSelectElements.length; i++) {
        const selectElement = rewriteSelectElement(rawSelectElements[i])
        container.setSelectElement(i + 1, selectElement)
    }
    return container
}

/**
 *
 * @param rawElement
 * @returns {SelectElement}
 */
function rewriteSelectElement(rawElement) {
    let compiled = null
    if (rawElement.hasOwnProperty('fullColumnName')) {
        compiled = rewriteColumnName(rawElement.fullColumnName)
    } else if (rawElement.hasOwnProperty('expression')) {
        compiled = rewriteExpression(rawElement.expression)
    } else if (rawElement.hasOwnProperty('functionCall')) {
        compiled = rewriteExpression(rawElement.functionCall) // TODO detect aggregation function
    } else {
        throw new Error('Rewriter do not support this type of select element')
    }
    let uid = rawElement.uid || null
    return new SelectElement(rawElement, compiled, uid) // TODO set aggregation function
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
