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
