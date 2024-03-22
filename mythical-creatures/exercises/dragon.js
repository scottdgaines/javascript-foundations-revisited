class Dragon {
  constructor(name, rider, temp) {
    this.name = name,
    this.rider = rider,
    this.temperment = temp,
    this.timesEaten = 0,
    this.hungry = true
  }
}

const createDragon = (name, rider, temp) => {
  return new Dragon(name, rider, temp)
}

const greetRider = (dragon) => {
  return `Hi, ${dragon.rider}!`
}

const eat = (dragon) => {
  dragon.timesEaten++

  if (dragon.timesEaten >= 3) {
    dragon.hungry = false
  }

  return dragon
}


module.exports = {
  createDragon,
  greetRider,
  eat
  // findFireBreathers
}