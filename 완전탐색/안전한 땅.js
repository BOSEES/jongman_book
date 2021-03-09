const input = `1
5 2
1 0 0 1 0
0 1 0 1 1
0 0 0 1 0
0 0 0 0 0
0 0 1 0 0`;

function sol(input) {
  const arr = input.split(/\n/).map((e) => e.split(" "));
  const mine = arr.slice(2);
  const mineSweeper = [];
  let max = 0;
  for(let i = 0; i < arr[1][1]; i++){
    const a =[]
    for(let j = 0; j < arr[1][1]; j++){
      a.push(1)
    }  
    mineSweeper.push(a);
  }


  for (let i = 0; i < mine.length - mineSweeper.length + 1; i++){
    for (let j = 0; j < mine.length - mineSweeper.length + 1; j++){
      let count = 0;
      for (let k = 0; k < mineSweeper.length; k++){
        for (let p = 0; p < mineSweeper.length; p++){
          if (mine[i+k][j+p] == mineSweeper[k][p]) {
            count++
          }
        }
      }
      max = Math.max(max, count);
    }
  }
  return max;
}

console.log(sol(input));