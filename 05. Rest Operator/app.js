/*
Rest operator...
gathers/collects items
destructuring, functions
placement important, careful with the same name
rest when declare function, spread when invoke the function

*/

//arrays
const fruits = ['apple', 'orange', 'lemon', 'banana']
const [first, ...restOfTheFruits] = fruits
console.log(first, restOfTheFruits)
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon')
console.log(specificFruit)
//object
const person = { name: 'john', lastName: 'smith', job: 'developer' }
// const { job, ...rest } = person
// console.log(job, rest)
//functions
const getAverage = (name, ...scores) => {
  console.log(name)
  console.log(scores)
  const average =
    scores.reduce((total, item) => {
      return (total += item)
    }, 0) / scores.length
  console.log(average)
}

// getAverage(person.name, 98, 85, 24, 24, 11)
const testScores = [23, 45, 66, 12, 92]
getAverage(person.name, ...testScores)

//Spread Operator..
// Allows and iterable to spread/expand individually inside receiver
// Split into single items and COPY them

const udemy = 'udemy'
const letters = [...udemy]
console.log(letters)

const boys = ['john', 'peter', 'bob']
const girls = ['susan', 'anna']

const bestFriend = 'arnold'

const friends = [...boys, ...girls, bestFriend]
console.log(friends)

//reference
// const newFriends = friends;
// copy
const newFriends = [...friends]
newFriends[0] = 'nancy'
console.log(friends)
console.log(newFriends)

// ES2018 - ES8 Object
const person1 = { name: 'john', job: 'developer' }
const newPerson = { ...person1, job: 'CEO', age: 32 }
console.log(newPerson)
