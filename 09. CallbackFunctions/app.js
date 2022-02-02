// functions that are passed onto the argument and execute later

function makeUppsercase(value) {
  console.log(value.toUpperCase())
}

// makeUppsercase('peter')

function reverseString(value) {
  console.log(value.split('').reverse().join(''))
}

const handleName = (name, cb) => {
  const fullName = `${name} smith`
  cb(fullName)
  // some more logic
}

handleName('peter', makeUppsercase)
handleName('peter', reverseString)
handleName('susan', (value) => console.log(value))

// array methods, setTimeout, event listeners etc

const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
  console.log('clicked')
})
