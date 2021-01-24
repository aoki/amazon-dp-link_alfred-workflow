const alfy = require('alfy')
if (alfy.input.startsWith('https://www.amazon.')) {
  const res = 'https://amazon.co.jp/' + alfy.input.match(/dp\/\w{10}/)[0]
  console.log(res)
}
