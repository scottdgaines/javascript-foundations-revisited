class Hobbit{
  constructor(name, age) {
    this.name = name || 'unknown',
    this.age = age || 0
  }
}

const createHobbit = (name, age) => {
  return new Hobbit(name, age)
}

module.exports = {
  createHobbit
  // celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}