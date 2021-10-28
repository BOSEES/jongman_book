let input = `8 4 2`;
input = input.split(" ").map((e) => parseInt(e));

function sol(data) {
  let combi = [];
  let n = data[0];
  let m = data[1];
  let k = data[2];
  let temp = Array.from({length: m}, () => 0);
  let ch = Array.from({length: n + 1}, () => 0);

  function DFS(L) {
    if (L >= m) {
      combi.push(temp.slice());
    } else {
      for (let i = 1; i < n + 1; i++) {
        if(ch[i] === 0) {
          ch[i] = 1;
          temp[L] = i;
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);
  let t = 1;
  for (let i = 0; i < 1; i++) {
    for (let j = 1; j < combi.length; j++) {
      let count = 0;
      for (let k = 0; k < combi[i].length; k++) {
        for (let s = 0; s < combi[i].length; s++) {
          if (combi[i][k] === combi[j][s]) {
            count++;
          }
        }
      }
      if (count >= k) {
        t++;
      }
    }
  }

  return t / combi.length;
}

console.log(sol(input))
