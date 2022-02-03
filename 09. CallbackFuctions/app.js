// Callback Hell
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

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', () => {
//   console.log('clicked')
// })

// Callback Hell
// after 1s first red;
// after 3s second blue;
// after 2s third green;

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

const btn = document.querySelector('.btn')
// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     first.style.color = 'red'
//   }, 1000)
//   setTimeout(() => {
//     second.style.color = 'blue'
//   }, 3000)
//   setTimeout(() => {
//     third.style.color = 'green'
//   }, 2000)
// })

// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE!

btn.addEventListener('click', () => {
  setTimeout(() => {
    first.style.color = 'red'
    setTimeout(() => {
      second.style.color = 'blue'
      setTimeout(() => {
        third.style.color = 'green'
      }, 2000)
    }, 3000)
  }, 1000)
})
