class Tape {
    constructor(title, status) {
        this.title = title,
        this.readyToPlay = status || false
    }
}

const createTape = (title, status) => {
    const newTape = new Tape(title, status)
    return newTape
}

const reset = (tape) => {
    if (!tape.readyToPlay) {
        tape.readyToPlay = true
    }

    return tape

}

module.exports = { 
    createTape, 
    reset 
}