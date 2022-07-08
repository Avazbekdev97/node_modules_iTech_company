const querystring = require('querystring')

const data = 'year=2022&month=july&day=03'
const parse = querystring.parse(data)

console.log(parse.year)
console.log(parse.month)
console.log(parse.day)