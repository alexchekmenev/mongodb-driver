const antlr4 = require('antlr4/index');

class AntlrCaseInsensitiveInputStream extends antlr4.InputStream {
    constructor(data, lowerCase) {
        super(data);
        this._lookaheadData = [];
        const input = lowerCase ? data.toLowerCase() : data.toUpperCase();
        for (let i = 0; i < input.length; i++) {
            this._lookaheadData.push(input.charCodeAt(i));
        }
    }

    LA(offset) {
        if (offset === 0) {
            return 0; // undefined
        }
        if (offset < 0) {
            offset += 1; // e.g., translate LA(-1) to use offset=0
        }
        const pos = this._index + offset - 1;
        if (pos < 0 || pos >= this._size) { // invalid
            return antlr4.Token.EOF;
        }
        return this._lookaheadData[pos];
    }
}

module.exports = AntlrCaseInsensitiveInputStream

// function AntlrCaseInsensitiveInputStream(data, lowerCase) {
//     antlr4.InputStream.call(this, data);
//     this._lookaheadData = [];
//     const input = lowerCase ? data.toLowerCase() : data.toUpperCase();
//     for (let i = 0; i < input.length; i++) {
//         this._lookaheadData.push(input.charCodeAt(i));
//     }
//     return this;
// }
//
// AntlrCaseInsensitiveInputStream.prototype = Object.create(antlr4.InputStream.prototype);
// AntlrCaseInsensitiveInputStream.prototype.constructor = AntlrCaseInsensitiveInputStream;
//
// AntlrCaseInsensitiveInputStream.prototype.LA = function (offset) {
//     if (offset === 0) {
//         return 0; // undefined
//     }
//     if (offset < 0) {
//         offset += 1; // e.g., translate LA(-1) to use offset=0
//     }
//     const pos = this._index + offset - 1;
//     if (pos < 0 || pos >= this._size) { // invalid
//         return antlr4.Token.EOF;
//     }
//     return this._lookaheadData[pos];
// };
//
// module.exports.AntlrCaseInsensitiveInputStream = AntlrCaseInsensitiveInputStream;
