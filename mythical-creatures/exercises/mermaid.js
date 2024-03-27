const { createSidekick } = require('/sidekick')

class Mermaid{
    constructor(name, friendName) {
        this.name = name,
        this.fins = true,
        this.friend = {
            name: friendName
        }
    }
}

const createMermaid = (name) => {
    return new Mermaid(name, friendName)
}

const createFr

module.exports = {
    createMermaid,
    createSidekick
    // addToCollection,
    // sing
}