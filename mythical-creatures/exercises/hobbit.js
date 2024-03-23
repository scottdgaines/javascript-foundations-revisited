class Hobbit{
  constructor(name, age) {
    this.name = name,
    this.age = age
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