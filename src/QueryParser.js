const antlr4 = require('antlr4');
const Lexer = require('.//generated/MySqlLexer');
const MySqlParser = require('.//generated/MySqlParser').MySqlParser;
const Visitor = require('.//Visitor');
const Stream = require('.//AntlrCaseInsensitiveInputStream');

class QueryParser {
    /**
     * Return MongoDb Aggregation pipeline
     * @param input
     */
    parse(input) {
        // const chars = new antlr4.InputStream(input)
        const chars = new Stream(input, false)
        const lexer = new Lexer.MySqlLexer(chars)

        const tokens = new antlr4.CommonTokenStream(lexer)
        const parser = new MySqlParser(tokens)
        const parseTree = parser.sqlStatements()

        // console.log(parseTree.toStringTree(src.ruleNames))

        return parseTree.accept(new Visitor())
    }
}

module.exports = QueryParser



