let arr=[87, 89, 92, 100, 76];

function solution(arr) {
  let answer = "";
  
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] <= arr[j]) count++
    }
    answer += count + " ";
  }
  return answer;
}

console.log(solution(arr));