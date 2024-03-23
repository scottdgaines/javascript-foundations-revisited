class Hobbit{
  constructor(name, age) {
    this.name = name || 'unknown',
    this.age = age || 0,
    this.isAdult = false,
    this.isOld = false,
    this.acquaintances = []
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

const meetPeople = (hobbit, people) => {
  people.forEach(person => {
    hobbit.acquaintances.push(person)
  })

  return hobbit
}

const findFriends = (hobbit) => {
  return hobbit.acquaintances.reduce((friends, person) => {
    if (person.relationship === "friend") {
      friends.push(person.name)
    }
    return friends
  }, [])
  
  
 
}

module.exports = {
  createHobbit,
  celebrateBirthday,
  getRing,
  meetPeople, 
  findFriends
}