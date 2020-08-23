const antlr4 = require('antlr4');
const Lexer = require('./generated/MySqlLexer');
const { MySqlParser } = require('./generated/MySqlParser');
const Visitor = require('./Visitor');
const { AntlrCaseInsensitiveInputStream } = require('./AntlrCaseInsensitiveInputStream');

module.exports = { parse }

/**
 * Return parsed SQL query
 * @param input {string}
 * @returns {object}
 */
function parse(input) {
    const chars = new AntlrCaseInsensitiveInputStream(input)
    const lexer = new Lexer.MySqlLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new MySqlParser(tokens)
    const parseTree = parser.sqlStatements()

    return parseTree.accept(new Visitor())
}



