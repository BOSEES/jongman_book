let arr=[
[3, 4, 1, 2],
[4, 3, 2, 1],
[3, 1, 4, 2]];

function solution(arr) {
  let answer = 0;
  let tmp = [];
  for (let i = 1; i <= arr[0].length; i++) {
    for (let j = 1; j <= arr[0].length; j++) {
      let count = 0;
      for(let k = 0; k < arr.length; k++) {
        let pi = 0;
        let pj = 0;
        for(let s = 0; s < arr[0].length; s++) {
          if (arr[k][s] == i) pi = s;
          if (arr[k][s] == j) pj = s;
        }
        if (pi < pj) count++
      }
      if(count == arr.length) {
        tmp.push([i,j]);
        answer++
      }
    }
  }
  console.log(tmp)
  return answer
}

console.log(solution(arr));