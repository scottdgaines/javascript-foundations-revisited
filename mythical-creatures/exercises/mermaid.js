const { createSidekick } = require('./sidekick.js')

class Mermaid{
    constructor(name) {
        this.name = name,
        this.fins = true,
        this.sidekick = null
    }

    instantiateSidekick(name, species) {
        const sidekick = createSidekick(name, species)
        this.sidekick = sidekick
        return sidekick
    }
}

const createMermaid = (name) => {
    return new Mermaid(name)
}

module.exports = {
    createMermaid,
    createSidekick
    // addToCollection,
    // sing
}