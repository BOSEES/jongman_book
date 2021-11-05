let input = [[10,20,30,40,50],
            [20,40,20,40,20],
            [5,80,45,70,25],
            [30,30,40,40,60],
            [50,50,10,10,50]];

function sol(shop) {
  let n = shop.length;
  let result1 = 0;
  let result2 = 0;

  result1 = Math.min.apply(null, shop.map((e) => {
    return e.reduce((a, b) => a + b, 0);
  }));

  for (let i = 0; i < n; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < n; j++) {
      if (shop[j][i] < min) {
        min = Math.min(min, shop[j][i]);
      }
    }
    result2 += min;
  }
  
  return `${result1} ${result2}`
}

console.log(sol(input));