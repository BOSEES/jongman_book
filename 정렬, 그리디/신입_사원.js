let input = `5
3 2
1 4
4 1
2 3
5 5`

let arr = input.split("\n").map((e) => e.split(" ").map((x) => x = parseInt(x, 10)));
arr.shift();

function solution(input) {
  let answer = 1;
  let inputArr = input.sort((a, b) => a[0] - b[0]);
  let n = input[0][1];
  for (let i = 1; i< inputArr.length; i++) {
    if (inputArr[i][1] < n) {
      answer++;
      n = inputArr[i][1];
    }
  }

  return answer;
}

console.log(solution(arr))