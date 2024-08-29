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

const createCollection = (tape1, tape2, tape3) => {
    let collection
    
    if (tape1 || tape2 || tape3) {
        collection = [tape1, tape2, tape3]
        return collection
    } else {
        return 'Your collection is empty.'
    }
}

const previewCollection = (collection) => {
    const titles = collection.map(tape => {
        return tape.title
    })
    return titles
}


module.exports = { 
    createTape, 
    reset,
    createCollection,
    previewCollection
}