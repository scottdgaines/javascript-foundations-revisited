const { createSidekick } = require('./sidekick.js')

class Mermaid{
    constructor(name) {
        this.name = name,
        this.fins = true,
        this.sidekick = null,
        this.collection = []
    }

    instantiateSidekick(name, species) {
        const sidekick = createSidekick(name, species)
        this.sidekick = sidekick
        return sidekick
    }

    addToCollection(object) {
        this.collection.push(object)
    }
}

const createMermaid = (name) => {
    return new Mermaid(name)
}

module.exports = {
    createMermaid,
    createSidekick
    // sing
}