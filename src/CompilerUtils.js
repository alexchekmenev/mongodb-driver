const { Element } = require('./SelectElementContainer')

module.exports = {
    /**
     *
     * @param element {Element}
     * @returns {string}
     */
    getHash: (element) => {
        return JSON.stringify(element.compiled) // FIXME use .toString() on typed input
    }


}

function rewriteColumnName(name) {
    return `$${name.columnName.replace(/[$]+/g, '')}`
}
