let input = `5
R R R U D D`;

input = input.split("\n");

let n = parseInt(input.shift());
let move = input.shift().split(" ");
let answer = [1,1];

for (let i = 0; i < n; i++) {
  if (move[i] === "R" && answer[1] < n) {
    answer[1]++;
  } else if (move[i] === "L" && answer[1] > 1) {
    answer[1]--;
  } else if (move[i] === "U" && answer[0] > 1) {
    answer[0]--;
  } else {
    answer[0]++;
  }
}

console.log(answer.join(" "));
