module.exports = {
    SelectElement,
    GroupElement,
    OrderElement,
    ElementContainer
}

class ElementContainer {
    constructor(elementsByHash) {
        this.elements = new Map()
        this.elementsByHash = elementsByHash
    }

    /**
     * NOTE position starts from 1
     * @param position {number}
     * @param element {Element}
     */
    setElement(position, element) {
        this.elements.set(position, element)

        const hash = element.getHash()
        if (!this.elementsByHash.has(hash)) {
            element.setHashId(this.elementsByHash.size + 1)
            this.elementsByHash.set(hash, element)
        } else {
            const found = this.elementsByHash.get(hash)
            element.setHashId(found.hashId)
        }
    }

    /**
     *
     * @param position
     * @returns {Element}
     */
    getByReference(position) {
        if (this.elements.has(position)) {
            return this.elements.get(position)
        }
        throw new Error('No element at this position')
    }

    entries() {
        return this.elements.entries()
    }

    get size() {
        return this.elements.size
    }

    // TODO add hasAggregationFunction
}

class Element {
    constructor(raw, compiled, uid) {
        this.raw = raw
        this.compiled = compiled
        this.uid = uid || null
        this.hashId = null
    }

    setHashId(id) {
        this.hashId = id
    }

    getHash() {
        return JSON.stringify(this.compiled) // FIXME use .toString() on typed input
    }
}

class SelectElement extends Element {
    constructor(raw, compiled, uid) {
        super(raw, compiled, uid);
        // TODO set "is aggregation function"
    }
}

class GroupElement extends Element {
    constructor(raw, compiled) {
        super(raw, compiled, null);
    }
}

class OrderElement extends Element {
    constructor(raw, compiled, sortOrder) {
        super(raw, compiled, null);
        this.sortOrder = sortOrder === 'DESC' ? -1 : 1
    }
}
