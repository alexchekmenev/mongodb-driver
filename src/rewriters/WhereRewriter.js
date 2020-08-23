const { rewriteExpression } = require('./CommonRewriter')

module.exports = {
    rewrite
}

function rewrite(where) {
    if (!where || !Object.keys(where).length) {
        return null
    }
    if (Array.isArray(where)) {
        where = where[0]
    }
    return {
        $expr: rewriteExpression(where)
    }
}
