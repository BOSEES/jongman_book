let input = `4 5
..XX.
.#XX.
..#..
.....`;

input = input.split("\n");
let rc = input.shift().split(" ").map((e) => parseInt(e));

function sol(park) {
  let answer = [0,0,0,0,0];


  for (let i = 0; i < rc[0] - 1; i++) {
    for (let j = 0; j < rc[1] - 1; j++) {
      let bilding = 0;
      let temp = 0;
      let car = 0;
      for (let k = i; k < 2 + i; k++) {
        for (let s = j; s < 2 + j; s++) {
          if (park[k][s] === "#") bilding++;
          else if(park[k][s] === "X") car++;
          else temp++
        }
      }
      if (bilding) {
        continue;
      } else {
        if (temp === 4) answer[0]++
        else if (temp === 3) answer[1]++
        else if (temp === 2) answer[2]++
        else if (temp === 1) answer[3]++
        else if (temp === 0) answer[4]++
      }
    }
  }

  return answer.join("\n");
}

console.log(sol(input))