let a=[1, 2, 1, 3, 1, 1, 1, 2];
//완전탐색(카운팅)
// function solution(m, arr) {
//   let answer = 0;

//   for(let i = 0; i < arr.length; i++) {
//     let sum = arr[i];
//     for(let j = i + 1; j < arr.length; j++) {
//       if (sum + arr[j] == m) {
//         answer++
//         break;
//       } else if (sum + arr[j] < m) {
//         sum += arr[j];
//       } else {
//         break;
//       }
//     }
//   }
//   return answer;
// }

// function solution(m, arr) {
//   let answer = [];
//완전탐색(배열)
//   for(let i = 0; i < arr.length; i++) {
//     let sum = arr[i];
//     let x = [arr[i]]
//     for(let j = i + 1; j < arr.length; j++) {
//       x.push(arr[j]);
//       if (sum + arr[j] == m) {
//         answer.push(x);
//         break;
//       } else if (sum + arr[j] < m) {
//         sum += arr[j];
//       } else {
//         break;
//       }
//     }
//   }
//   return answer.length;
// }

function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right]

    if(sum == m) answer++;
    while(sum >= m) {
      sum -= arr[left];
      left++;
      if(sum == m) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution(6, a));