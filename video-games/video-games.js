class Player {
    constructor(name, age, move) {
        this.name = name,
        this.age = age,
        this.moveset = move
    }
}

const createPlayer = (name, age, move) => {
    const player = new Player(name, age, move)
    return player
}


module.exports = {createPlayer };