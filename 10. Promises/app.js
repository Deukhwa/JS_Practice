// Promises : to avoid callback hell

// async await
// consume/use promises

// Pending, Rejected, FulFilled

const value = 2

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3)
  if (random === value) {
    resolve('You guessed correct!')
  } else {
    reject('Worng number')
  }
})

console.log(promise)

promise
  .then((data) => {
    console.log(data)
  })
  .catch((e) => {
    console.log(e)
  })

//
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE!

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  addColor(1000, '.first', 'red', 'hello world')
    .then((data) => addColor(3000, '.second', 'blue', data))
    .then((data) => {
      console.log(data)
      addColor(2000, '.third', 'green', data)
    })
    .catch((e) => console.log(e))
})

function addColor(time, selector, color, data) {
  const element = document.querySelector(selector)
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color
        resolve(data)
      }, time)
    } else {
      reject(`There is no such element: ${selector}`)
    }
  })
}
