let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(arr) {
  let result  = [];
  let sum9 = arr.reduce((a, b) => a + b);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      let sum7 = sum9 - (arr[i] + arr[j]);
      if(sum7 == 100) {
        for (let k = 0; k < arr.length; k++) {
          if(arr[i] !== arr[k] && arr[j] !== arr[k]) {
            result.push(arr[k]);
          }
        } 
      }
    }
  }
  return result.join(" ");
}

console.log(solution(arr));