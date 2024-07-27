class Player {
    constructor(name, age, move) {
        this.name = name,
        this.age = age,
        this.moveset = move
    }
}

class Level {
    constructor(name, players) {
        this.name = name,
        this.players = players,
        this.coins = 0,
        this.lives = 3
    }
}

const createPlayer = (name, age, move) => {
    const player = new Player(name, age, move)
    return player
}

const createLevel = (name, players) => {
    const level = new Level(name, players)
    return level
}

const findCoins = (level, count) => {
    level.coins = count
    
    if (level.coins >= 100) {
        level.lives = level.lives + 1
    } 

    return level
}

const defeatPlayer = (level) => {
    level.lives = level.lives -1 
   
    if (level.lives > 0) {
        return level
    } else if (level.lives == 0) {
        return 'GAME OVER'
    }
}

module.exports = {
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer
};