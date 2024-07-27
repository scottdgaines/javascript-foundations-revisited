class Mage {
  constructor(health, magic) {
    this.health = health,
    this.magic = magic
  }
}

class Enemy {
  constructor(name, health) {
    this.name = name, 
    this.health = health
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

module.exports = {
  createMage,
  createEnemy,
  // castSpell,
  // castUltimate
}