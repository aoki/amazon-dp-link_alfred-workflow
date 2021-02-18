const alfy = require('alfy');
if (alfy.input.startsWith('https://www.amazon.')) {
  // TODO gp/product link
  const res = 'https://amazon.co.jp/' + alfy.input.match(/(dp|gp\/product)\/\w{10}/)[0];
  console.log(res.trim());
}
