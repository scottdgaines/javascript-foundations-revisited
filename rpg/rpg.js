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

const castSpell = (mage, enemy) => {
  if (mage.magic >= 5) {
    mage.magic = mage.magic - 5
    if (enemy) {
      enemy.health = enemy.health - 20 
    }
    return `That spell cost 5 points. I have ${mage.magic} magic points left!`
  } else if (mage.magic < 5) {
    return 'I can\'t do that. I don\'t have any magic points left!'
  }
}

module.exports = {
  createMage,
  createEnemy,
  castSpell,
  // castUltimate
}