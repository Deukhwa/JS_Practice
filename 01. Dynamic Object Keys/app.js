// dot notation

const person = {
  name: 'John',
}

console.log(person.name) // John
person.age = 25
console.log(person)

// squre bracket notation

const items = {
  'featured-items': ['item1', 'items2'],
}
console.log(items['featured-items'])

let appState = 'loading'
let keyName = 'computer'
const app = {
  [appState]: true,
}

app[keyName] = 'apple'

console.log(app)

const state = {
  loading: true,
  name: '',
  job: '',
}

function updateState(key, value) {
  state[key] = value
}

updateState('products', [])
updateState('name', 'john')
updateState('job', 'student')
console.log(state)
