const MySqlParserVisitor = require('./generated/MySqlParserVisitor').MySqlParserVisitor;

class BaseVisitor extends MySqlParserVisitor {

    // TODO restrict every query type but SELECT ...

    /**
     * SELECT
     */

    visitSelectStarElement(ctx) {
        throw new Error('Do not support select star element')
    }

    /**
     * FUNCTION CALLS
     */

    visitSpecificFunctionCall(ctx) {
        throw new Error('Do not support specific function call')
    }

    visitScalarFunctionCall(ctx) {
        throw new Error('Do not support scalar function call')
    }

    visitUdfFunctionCall(ctx) {
        throw new Error('Do not support UDF function call')
    }

    visitPasswordFunctionCall(ctx) {
        throw new Error('Do not support password function call')
    }

    /**
     * EXPRESSIONS
     */

    visitIsExpression(ctx) {
        throw new Error('Do not support IS expression')
    }

    /**
     * PREDICATES
     */

    visitInPredicate(ctx) {
        throw new Error('Do not support IN predicate')
    }

    visitSubqueryComparasionPredicate(ctx) {
        throw new Error('Do not support sub-query comparison predicate')
    }

    visitBetweenPredicate(ctx) {
        throw new Error('Do not support BETWEEN predicate')
    }

    visitSoundsLikePredicate(ctx) {
        throw new Error('Do not support SOUNDS LIKE predicate')
    }

    visitLikePredicate(ctx) {
        throw new Error('Do not support LIKE predicate')
    }

    visitRegexpPredicate(ctx) {
        throw new Error('Do not support regexp predicate')
    }

    /**
     * EXPRESSION ATOMS
     */

    visitCollateExpressionAtom(ctx) {
        throw new Error('Do not support COLLATE expression atom')
    }

    visitMysqlVariableExpressionAtom(ctx) {
        throw new Error('Do not support MySQL variable expression atom')
    }

    visitUnaryExpressionAtom(ctx) {
        throw new Error('Do not support unary expression atom')
    }

    visitBinaryExpressionAtom(ctx) {
        throw new Error('Do not support BINARY expression atom')
    }

    visitNestedRowExpressionAtom(ctx) {
        throw new Error('Do not support nested ROW expression atom')
    }

    visitExistsExpessionAtom(ctx) {
        throw new Error('Do not support EXISTS expression atom')
    }

    visitSubqueryExpessionAtom(ctx) {
        throw new Error('Do not support sub-query expression atom')
    }

    visitIntervalExpressionAtom(ctx) {
        throw new Error('Do not support INTERVAL expression atom')
    }
}

module.exports = BaseVisitor
