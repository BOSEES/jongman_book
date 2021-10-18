let input = `5
1
5
3
1
2`;

input = input.split("\n").map((e) => parseInt(e));

function sol(rank) {
  let answer = 0;
  let n = rank.shift();
  rank.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    answer += Math.abs((i + 1) - rank[i]);
  }

  return answer;
}

console.log(sol(input));