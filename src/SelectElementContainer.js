const { getHash } = require('./CompilerUtils')

class SelectElementContainer {
    constructor(hashMap) {
        this.selectMap = new Map()
        this.hashMap = hashMap
    }

    /**
     * NOTE position starts from 1
     * @param position {number}
     * @param element {Element}
     */
    setSelectElement(position, element) {
        this.selectMap.set(position, element)

        const hash = getHash(element)
        if (!this.hashMap.has(hash)) {
            element.setHashId(this.hashMap.size + 1)
            this.hashMap.set(hash, element)
        } else {
            const found = this.hashMap.get(hash)
            element.setHashId(found.hashId)
        }
    }

    /**
     *
     * @param position
     * @returns {Element}
     */
    getByReference(position) {
        if (this.selectMap.has(position)) {
            return this.selectMap.get(position)
        }
        throw new Error('No SelectElement at this position')
    }

    entries() {
        return this.selectMap.entries()
    }

    get size() {
        return this.selectMap.size
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

module.exports = {
    SelectElement,
    GroupElement,
    OrderElement,
    SelectElementContainer
}
