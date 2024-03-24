class Vampire{
  constructor(name, pet) {
    this.name = name,
    this.pet = pet || 'bat',
    this.thirsty = true,
    this.ouncesDrank = 0
  }
}

const createVampire = (name, pet) => {
  return new Vampire(name, pet)
}

const encounterDeliciousVictim = (vampire) => {
  if (vampire.thirsty == true) {
    return 'I WANT TO SUCK YOUR BLOOD!'
  } else {
    return 'No thanks, I am too full.'
  }
}

const drink = (vampire) => {
  if (vampire.ouncesDrank <= 30 && vampire.thirsty == true) {
    vampire.ouncesDrank = vampire.ouncesDrank + 10
  } else if (vampire.ouncesDrank <= 50 && vampire.thirsty == true) {
    vampire.ouncesDrank = vampire.ouncesDrank + 10
    vampire.thirsty = false
  }
  return vampire
}

module.exports = {
  createVampire, 
  drink, 
  // findBatLovers, 
  encounterDeliciousVictim, 
  // inquirePlace
}