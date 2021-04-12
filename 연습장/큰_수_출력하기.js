let arr = [7,3,9,5,6,12];

function solution(n, arr) {
  let answer = "";
  answer += arr[0] + " ";
  for (let i = 1; i < arr.length; i++) {
    if(arr[i] < arr[i + 1]) answer += arr[i+1] + " ";
  }
  return answer;
}

console.log(solution(6, arr));