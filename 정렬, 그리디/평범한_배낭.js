let input = `4 7
6 13
4 8
3 6
5 12`;

input = input.split("\n").map((e) => e.split(" ").map((x) => x = parseInt(x, 10)));
let nk = input.shift();
console.log(input)
function solution(bag) {
  let answer = 0;
  const n = nk[0];
  const weight = nk[1];
  let dp = Array.from({length:n}, () => Array(weight + 1).fill(0));

  for (let i = 1; i < n; i++) {
    if()
  }
  
  console.log(dp)
  return answer;
}

console.log(solution(input));