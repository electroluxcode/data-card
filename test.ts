const crawler = require('./crawler/Juejin');

async function test() {
  let info = await crawler('3004311888208296')
  // console.log(info)
}

test();
