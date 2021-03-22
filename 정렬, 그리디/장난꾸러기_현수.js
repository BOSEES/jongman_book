let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];

function solution(arr) {
  let answer = [];
  let sortArr = [...arr].sort((a, b) => a - b);

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer.join(" ");
}

console.log(solution(arr));