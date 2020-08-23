const { rewriteExpression } = require('./CommonRewriter')

module.exports = {
    rewrite
}

function rewrite(where) {
    if (!where) {
        return null
    }
    return {
        $expr: rewriteExpression(where)
    }
}
