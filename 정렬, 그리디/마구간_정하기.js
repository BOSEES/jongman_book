let arr=[1, 2, 8, 4, 9];

function solution(c, arr) {
  let answer;
  let sortArr = arr.sort((a, b) => a - b);
  let left = 1;
  let right = sortArr[sortArr.length - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if(count(arr,mid) >= c){
      answer = mid;
      left = mid + 1;

    } else {
      right = mid - 1;
    }
  }
  return answer;
}

function count(arr, capacity) {
  let count = 1;
  let temp = 1;
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] - temp >= capacity) {
      count++;
      temp = arr[i];
    }
  }
  return count;
}


console.log(solution(3, arr));