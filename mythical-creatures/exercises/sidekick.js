class Sidekick{
    constructor(name, species) {
        this.name = name,
        this.species = species
    }
}

const createSidekick = (name, species) => {
    return new Sidekick(name, species)
}

module.exports = {
    createSidekick
}