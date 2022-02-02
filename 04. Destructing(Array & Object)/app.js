// faster and easier way to access/unpack variables from arrays, objects

const fruits = ['orange', 'banana', 'lemon']
const friends = ['jon', 'peter', 'bob', 'anna', 'keylly']

const [a, c] = fruits
// console.log(a)
// console.log(b)
// console.log(c)

const [friend1, , friend2, , friend3] = friends

// let first = 'bob'
// let second = 'john'

// ;[second, first] = [first, second]

// console.log(first, second)

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
}

// const {
//   last: shakeAndBake,
//   first,
//   city,
//   siblings: { sister: favoriteSister },
// } = bob
// console.log(first, shakeAndBake, city, favoriteSister)

function printPerson({ city, siblings: { sister } }) {
  console.log(city, sister)
}

printPerson(bob)
