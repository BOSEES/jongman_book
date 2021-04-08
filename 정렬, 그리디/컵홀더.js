let input = `9
SLLLLSSLL`

let arr = input.split("\n");
let n = arr.shift();

console.log(arr)
function solution(cup) {
  let answer = parseInt(n) + 1; 
  let x = 0;
  cup = cup[0];
  for (let i = 0; i < n; i++) {
    if (cup[i] == 'L') {
      x++;
    }
  }
  answer -= x / 2;
  return answer;
}

console.log(solution(arr));