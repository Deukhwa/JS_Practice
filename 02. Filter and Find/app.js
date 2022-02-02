// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition

// Find - returns single instance, returns first match, if no match - undefined

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'dan', age: 30, position: 'boss' },
  { name: 'anna', age: 50, position: 'intern' },
]

const fruits = ['orange', 'pear', 'apple']

// filter
const adults = people.filter((person) => person.age > 20)
console.log(adults)
const developers = people.filter((person) => person.position === 'developer')
console.log(developers)
// no match
const young = people.filter((person) => person.age < 10)
console.log(young)
// find
const peter = people.find((person) => person.name === 'peter')
console.log(peter)

const apple = fruits.find((fruit) => fruit === 'apple')
console.log(apple)
// no match
const oldPerson = people.find((person) => person.age > 80)
console.log(oldPerson)

// multiple matches - first match
const randomPerson = people.find((person) => person.age < 50)
console.log(randomPerson)
