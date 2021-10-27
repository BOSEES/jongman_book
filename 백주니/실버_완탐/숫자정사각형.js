let input = `2 2
12
34`;

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") === -1) return e.split("").map((e) => parseInt(e));
  else return e.split(" ").map((e) => parseInt(e));
})

function sol(data) {
  const nm = data.shift();
  const n = nm[0];
  const m = nm[1];
  const min = Math.min(n,m);
  for (let s = min; min >= 1; s--) {
    for(let i = 0; i <= n - s; i++) {
      for (let j = 0; j <= m - s; j++) {
        const leftTop = data[i][j];
        const leftDown = data[i + s - 1][j]
        const rightTop = data[i][j + s - 1];
        const rightDown = data[i + s - 1][j + s - 1];
        console.log(leftTop, leftDown, rightTop, rightDown);
  
        if (leftTop === leftDown && leftTop === rightTop && leftTop === rightDown) {
          return n * n
        } 
      }
    }
  }
  
}

console.log(sol(input))