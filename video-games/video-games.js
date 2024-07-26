class Player {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

const createPlayer = (name, age) => {
    const player = new Player(name, age)
    return player
}


module.exports = {createPlayer };