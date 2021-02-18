const cheerio = require('cheerio-httpcli');
const alfy = require('alfy');

(async () => {
  if (alfy.input.startsWith('https://www.amazon.')) {
    const id = alfy.input.match(/(dp|gp\/product)\/(\w{10})/)[2];
    const url = `https://amazon.co.jp/dp/${id}`;
    const res = await cheerio.fetch(url);
    const title = res.$('#productTitle').text().trim();
    console.log(`[${title}](${url})`);
  }
})();
