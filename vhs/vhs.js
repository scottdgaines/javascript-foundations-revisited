class Tape {
    constructor(title, status) {
        this.title = title,
        this.readyToPlay = status
    }
}

const createTape = (title, status) => {
    const newTape = new Tape(title, status)
    return newTape
}

module.exports = { createTape }