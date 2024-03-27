class Mermaid{
    constructor(name) {
        this.name = name,
        this.fins = true
    }
}

const createMermaid = (name) => {
    return new Mermaid(name)
}

module.exports = {
    createMermaid,
    // addToCollection,
    // sing
}