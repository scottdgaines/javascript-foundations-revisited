class Vampire{
  constructor(name, pet) {
    this.name = name,
    this.pet = pet || 'bat'
  }
}

const createVampire = (name, pet) => {
  return new Vampire(name, pet)
}

module.exports = {
  createVampire, 
  // drink, 
  // findBatLovers, 
  // encounterDeliciousVictim, 
  // inquirePlace
}