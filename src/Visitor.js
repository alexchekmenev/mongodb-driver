const BaseVisitor = require('./BaseVisitor');

class Visitor extends BaseVisitor {

    visitChildren(ctx) {
        let result = {};
        for (let i = 0; i < ctx.getChildCount(); i++) {
           result = reduceResult(result, this.visit(ctx.getChild(i)));
        }
        return result;
    }

    /**
     * FROM, WHERE
     */

    visitFromClause(ctx) {
        const { from } = this.visit(ctx.tableSources())
        const where = ctx.whereExpr ? this.visit(ctx.whereExpr): {}
        let group = []
        for (let i = 0; ctx.groupByItem(i) !== null; i++) {
            const childResult = this.visit(ctx.groupByItem(i))
            group = reduceResult({ group }, childResult).group
        }
        return { from, where, group }
    }

    // ! get only first table in list
    visitTableName(ctx) {
        return {
            from: removeQuotes(ctx.getText())
        }
    }

    /**
     * GROUP BY
     */

    visitGroupByItem(ctx) {
        let expression = this.visit(ctx.expression())
        if (typeof expression === 'string') {
            expression = {
                columnName: expression
            }
        }
        const order = ctx.DESC() ? 'DESC' : 'ASC'
        return { group: [{ expression, order }]}
    }

    /**
     * SELECT
     */

    visitSelectColumnElement(ctx) {
        const element = {
            fullColumnName: this.visit(ctx.fullColumnName())
        }
        if (ctx.uid()) {
            element.uid = removeQuotes(ctx.uid().getText())
        }
        return element.fullColumnName ? { select: [element] } : null
    }

    visitSelectFunctionElement(ctx) {
        const element = {
            functionCall: this.visit(ctx.functionCall())
        }
        if (ctx.uid()) {
            element.uid = removeQuotes(ctx.uid().getText())
        }
        return element.functionCall ? { select: [element] } : null
    }

    visitSelectExpressionElement(ctx) {
        const element = {
            expression: this.visit(ctx.expression())
        }
        if (ctx.uid()) {
            element.uid = removeQuotes(ctx.uid().getText())
        }
        return element.expression ? { select: [element] } : null
    }

    /**
     * ORDER BY
     */

    visitOrderByClause(ctx) {
        let order = []
        for (let i = 0; ctx.orderByExpression(i) !== null; i++) {
            const childResult = this.visit(ctx.orderByExpression(i))
            order = reduceResult({ order }, childResult).order
        }
        return { order }
    }

    visitOrderByExpression(ctx) {
        const expression = this.visit(ctx.expression())
        const order = ctx.DESC() ? 'DESC' : 'ASC'
        return { order: [{ expression, order }]}
    }

    /**
     * LIMIT
     */

    visitLimitClause(ctx) {
        const limit = this.visit(ctx.limit)
        const offset = (ctx.offset ? this.visit(ctx.offset) : null)
        return { limit, offset }
    }

    visitLimitClauseAtom(ctx) {
        if (ctx.decimalLiteral()) {
            return parseInt(ctx.decimalLiteral().getText())
        }
        throw new Error('Do not support LIMIT / OFFSET with MySQL variable')
    }

    /**
     * FUNCTION CALLS
     */

    visitAggregateFunctionCall(ctx) {
        if (ctx.aggregateWindowedFunction()) {
            return this.visit(ctx.aggregateWindowedFunction())
        }
        throw new Error('Do not support such aggregate function call')
    }

    // ! returns "expression"
    visitAggregateWindowedFunction(ctx) {
        if (ctx.COUNT()) {
            let aggregateExpression = null
            if (ctx.starArg) { // COUNT(*)
                aggregateExpression = 1
            } else if (ctx.functionArg()) { // COUNT(ALL? functionArg)
                aggregateExpression = this.visit(ctx.functionArg())
            } else {
                throw new Error('Do not support COUNT(DISTINCT functionArgs)')
            }
            return { $sum: aggregateExpression }
        } else {
            throw new Error('Do not support other aggregation functions')
        }
    }

    // ! returns "expression"
    visitFunctionArg(ctx) {
        if (ctx.constant()) {
            return this.visit(ctx.constant())
        } else if (ctx.fullColumnName()) {
            return this.visit(ctx.fullColumnName())
        } else if (ctx.functionCall()) {
            if (hasFunctionCallInStack(ctx)) { // TODO remove
                throw new Error('Do not support recursive function calls')
            }
            return this.visit(ctx.functionCall())
        } else if (ctx.expression()) {
            return this.visit(ctx.expression())
        }
    }

    /**
     * EXPRESSIONS
     */

    // ! returns "expression"
    visitNotExpression(ctx) {
        const result = this.visit(ctx.expression())
        return { $not: [ result ] }
    }

    // ! returns "expression"
    visitLogicalExpression(ctx) {
        const operator = this.visit(ctx.logicalOperator())
        return { [operator]: [this.visit(ctx.expression(0)), this.visit(ctx.expression(1))]}
    }

    // ! returns "expression"
    visitPredicateExpression(ctx) {
        return this.visit(ctx.predicate())
    }

    /**
     * PREDICATES
     */

    // ! returns "expression"
    visitBinaryComparasionPredicate(ctx) {
        const operator = this.visit(ctx.comparisonOperator())
        return { [operator]: [this.visit(ctx.predicate(0)), this.visit(ctx.predicate(1))]}
    }

    // ! returns "expression"
    visitExpressionAtomPredicate(ctx) {
        return this.visit(ctx.expressionAtom())
    }

    /**
     * EXPRESSION ATOM
     */

    visitConstantExpressionAtom(ctx) {
        return this.visit(ctx.constant())
    }

    visitFullColumnNameExpressionAtom(ctx) {
        return this.visit(ctx.fullColumnName())
    }

    visitFunctionCallExpressionAtom(ctx) {
        return this.visit(ctx.functionCall())
    }

    visitNestedExpressionAtom(ctx) {
        // throw new Error('Do not support nested expression atom')
        return this.visit(ctx.expression())
    }

    visitBitExpressionAtom(ctx) {
        // TODO ctx.bitOperator()
        throw new Error('Not implemented')
    }

    visitMathExpressionAtom(ctx) {
        // TODO ctx.mathOperator()
        throw new Error('Not implemented')
    }

    /**
     * PRIMITIVES
     */

    // ! returns constant
    visitConstant(ctx) {
        let constant
        if (ctx.nullLiteral) {
            if (ctx.NOT()) {
                constant = { $not: [null] }
            }
            constant = null
        } else if (ctx.stringLiteral()) {
            constant = removeQuotes(ctx.stringLiteral().getText())
        } else if (ctx.decimalLiteral()) {
            constant = parseInt(ctx.decimalLiteral().getText(), 10)
        } else {
            throw new Error('Do not support other types of constant')
        }
        return { constant }
    }

    // ! returns object
    visitFullColumnName(ctx) {
        if (ctx.dottedId(0)) {
            if (ctx.dottedId(1)) {
                throw new Error('Do not support column names with two dot')
            }
            return {
                tableName: removeQuotes(ctx.uid().getText()),
                columnName: removeQuotes(ctx.dottedId(0).uid().getText())
            }
        }
        return {
            columnName: removeQuotes(ctx.uid().getText())
        }
    }

    // ! returns string
    visitComparisonOperator(ctx) {
        const operator = ctx.getText()
        const mapper = {
            '=': '$eq',
            '>': '$gt',
            '<': '$lt',
            '<=': '$lte',
            '>=': '$gte'
        }
        if (!mapper.hasOwnProperty(operator)) {
            return '$ne'
        }
        return mapper[operator]
    }

    visitLogicalOperator(ctx) {
        if (ctx.AND() || ctx.BIT_AND_OP(0) && ctx.BIT_AND_OP(1)) {
            return "$and"
        } else if (ctx.OR() || ctx.BIT_OR_OP(0) && ctx.BIT_OR_OP(1)) {
            return "$or"
        }
        throw new Error('Do not support logical operator: ' + ctx ? ctx.getText() : '...')
    }

    visitBitOperator(ctx) {
        // TODO
        throw new Error('Not implemented')
    }

    visitMathOperator(ctx) {
        // TODO https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#arithmetic-expression-operators
        throw new Error('Not implemented')
    }
}

function reduceResult(current, other) {
    return {
        from: (current && current.from) || (other && other.from) || null,
        where: (current && current.where) || (other && other.where) || null,
        group: (current && current.group || []).concat((other && other.group || [])),
        select: (current && current.select || []).concat((other && other.select || [])),
        order: (current && current.order || []).concat((other && other.order || [])),
        limit: (current && current.limit) || (other && other.limit) || null,
        offset: (current && current.offset) || (other && other.offset) || 0
    }
}

function hasFunctionCallInStack(ctx) {
    const go = function(c) {
        if (!c) {
            return false
        }
        return c.functionCall() ? true : go(c.parentCtx)
    }
    return go(ctx)
}

function removeQuotes(str) {
    if (!str) {
        return null
    }
    let result = str
    if (
        (str.charAt(0) === '"' && str.charAt(str.length - 1) === '"') ||
        (str.charAt(0) === '\'' && str.charAt(str.length - 1) === '\'') ||
        (str.charAt(0) === '`' && str.charAt(str.length - 1) === '`')
    ) {
        result = str.substr(1, str.length - 2);
    }
    return result
}

module.exports = Visitor
