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
        if (this.collection.length < 3) {
            this.collection.push(object)
            return 'I need to go explore more shipwrecks!'
        } else if (this.collection.length == 3) {
            return 'That\'s aplenty!'
        }
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