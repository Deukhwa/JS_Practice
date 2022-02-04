// Async & Await
// async must be present, always returns a promise
// await waits till promise is setteled
// error handling - try/catch block

// const example = async () => {
//   return 'hello'
// }

// async function someFunc() {
//   const result = await example()
//   console.log(result)
//   console.log('Hello World')
// }

// console.log(example())
// someFunc()

const users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'ted' },
  { id: 3, name: 'mike' },
]

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  { userId: 2, articles: ['four', 'five'] },
  { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
]

const getData = async () => {
  try {
    const user = await getUser('ted')
    const articles = await getArticles(user.id)
    console.log(articles)
  } catch (error) {
    console.log(error)
  }
}

getData()

getUser('john')
  .then((user) => getArticles(user.id))
  .then((articles) => console.log(articles))
  .catch((e) => console.log(e))

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name)

    if (user) {
      return resolve(user)
    } else {
      return reject(`No such a user with name ${user}`)
    }
  })
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userAticles = articles.find((article) => article.userId === userId)

    if (userAticles) {
      return resolve(userAticles.articles)
    } else {
      reject(`Wrong ID`)
    }
  })
}
