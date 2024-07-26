class Player {
    constructor(name, age, move) {
        this.name = name,
        this.age = age,
        this.moveset = move
    }
}

class Level {
    constructor(name) {
        this.name = name
    }
}

const createPlayer = (name, age, move) => {
    const player = new Player(name, age, move)
    return player
}

const createLevel = (name) => {
    const level = new Level(name)
    return level
}


module.exports = {
    createPlayer,
    createLevel
};