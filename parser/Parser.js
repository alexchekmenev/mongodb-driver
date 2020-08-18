const antlr4 = require('antlr4');
const Lexer = require('../parser/generated/MySqlLexer');
const MySqlParser = require('../parser/generated/MySqlParser').MySqlParser;
const Visitor = require('../parser/Visitor');
const Stream = require('../parser/AntlrCaseInsensitiveInputStream');

class Parser {
    /**
     * Return MongoDb Aggregation pipeline
     * @param input
     */
    parse(input) {
        // const chars = new antlr4.InputStream(input);
        const chars = new Stream(input, false);
        const lexer = new Lexer.MySqlLexer(chars);

        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new MySqlParser(tokens);
        const parseTree = parser.sqlStatements();

        // console.log(parseTree.toStringTree(parser.ruleNames));

        return parseTree.accept(new Visitor())
    }
}

module.exports = {
    Parser
}



