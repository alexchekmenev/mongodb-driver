module.exports = {
    rewriteColumnName,
    rewriteExpression
}

function rewriteColumnName(name) {
    return `$${name.columnName.replace(/[$]+/g, '_')}`
}

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
