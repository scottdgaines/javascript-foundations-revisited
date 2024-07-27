class Mage {
  constructor(health, magic) {
    this.health = health,
    this.magic = magic
  }
}

class Enemy {
  constructor(name, health) {
    this.name = name, 
    this.health = health,
    this.alive = true
  }
}

const createMage = (health, magic) => {
  const mage = new Mage(health, magic)
  return mage
}

const createEnemy = (name, health) => {
  const enemy = new Enemy(name, health)
  return enemy
}

const castSpell = (character) => {
  character.magic = character.magic - 5
  return `That spell cost 5 points. I have ${character.magic} magic points left!`
}

module.exports = {
  createMage,
  createEnemy,
  castSpell,
  // castUltimate
}