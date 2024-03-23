class Hobbit{
  constructor(name, age) {
    this.name = name || 'unknown',
    this.age = age || 0,
    this.isAdult = false,
    this.isOld = false
  }
}

const createHobbit = (name, age) => {
  return new Hobbit(name, age)
}

const celebrateBirthday = (hobbit) => {
  hobbit.age++

  if (hobbit.age >= 33) {
    hobbit.isAdult = true
  }
  
  if (hobbit.age >= 101) {
    hobbit.isOld = true
  }

  return hobbit
}

const getRing = (hobbit) => {
  if (hobbit.name === "Frodo") {
    return 'Here is the ring!'
  } else {
    return 'You can\'t have it!'
  }
}

module.exports = {
  createHobbit,
  celebrateBirthday,
  getRing,
  // meetPeople, 
  // findFriends
}