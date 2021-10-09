let input = `5
1 3 7 9 5`;

input = input.split("\n");

function sol(data) {
  let answer = []
  let n = Number(data.shift());
  let nums = data[0].split(" ").map((e) => parseInt(e));
  let A = new Map();

  for (let i = 1; i < nums.length + 1; i++) {
    A.set(i,1);
  }

  for (let i of nums) {
    if(A.has(i)) answer.push(1);
    else answer.push(0);
  }

  return answer.join("\n");
}

console.log(sol(input));