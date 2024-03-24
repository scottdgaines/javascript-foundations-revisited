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

const encounterDeliciousVictim = () => {
  return 'I WANT TO SUCK YOUR BLOOD!'
}

module.exports = {
  createVampire, 
  // drink, 
  // findBatLovers, 
  encounterDeliciousVictim, 
  // inquirePlace
}