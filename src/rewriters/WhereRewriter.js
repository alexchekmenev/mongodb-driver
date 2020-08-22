const { rewriteExpression } = require('./CommonRewriter')

module.exports = {
    rewrite
}

function rewrite(where) {
    if (!where || !Object.keys(where).length) {
        return null
    }
    return {
        $expr: rewriteExpression(where)[0]
    }
}
