// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter('acc') - total of all calucations
// 2nd parameter('curr') - current iteration/value

const staff = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 200 },
  { name: 'dan', age: 30, position: 'boss', salary: 300 },
  { name: 'anna', age: 50, position: 'intern', salary: 50 },
]

const dailyTotal = staff.reduce((acc, curr) => {
  // console.log(acc)
  acc += curr.salary
  return acc
}, 0)

// console.log(dailyTotal)

// Reduce - Objects

// cart example

const cart = [
  { title: 'Samsung Galaxy S7', price: 599.99, amount: 1 },
  { title: 'google picel', price: 499.99, amount: 2 },
  { title: 'Xiaomi Redmi Note2 ', price: 699.99, amount: 4 },
  { title: 'iPhone13', price: 999.99, amount: 3 },
]

let { totalItems, cartTotal } = cart.reduce(
  (acc, curr) => {
    // console.log(curr)
    const { price, amount } = curr

    acc.totalItems += amount
    acc.cartTotal += amount * price
    return acc
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
)

cartTotal = parseFloat(cartTotal.toFixed(2))
// console.log(totalItems, cartTotal)

// github repos exmaple

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRepos = async () => {
  const response = await fetch(url)
  const data = await response.json()
  // console.log(data)
  const newData = data.reduce((total, repo) => {
    const { language } = repo

    if (language) {
      total[language] = total[language] + 1 || 1
    }

    // if (language) {
    //   if (total[language]) {
    //     total[language] = total[language] + 1
    //   } else {
    //     total[language] = 1
    //   }
    // }

    // console.log(total)
    return total
  }, {})
  console.log(newData)
}

fetchRepos()
