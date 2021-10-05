let arr=[1, 3, 5, 6, 7, 10];

// function solution(arr) {
//   let answer = "NO";
//   let flag = 0;
//   let ch = Array.from({length:arr.length}, () => 0);
//   function DFS(v) {
//     if (flag) return;
//     if (arr.length == v) {
//       let sum1 = 0;
//       let sum2 = 0;
//       for(let i = 0; i <= arr.length; i++) {
//         if (ch[i] == 1) sum1 += parseInt(arr[i], 10);
//         if (ch[i] == 0) sum2 += parseInt(arr[i], 10);
//       }

//       if(sum1 == sum2) {
//         answer = "YES";
//         flag = 1;
//       }
//     } else {
//       ch[v] = 1;
//       DFS(v+1);
//       ch[v] = 0;
//       DFS(v+1);
//     }
//   }

//   DFS(0);
//   return answer;
// }

function solution(arr) {
  let answer = "NO";
  let n = arr.length;
  let total = arr.reduce((a, b) => a + b, 0);
  let flag = 0;
  function DFS(L, sum) {
    if(flag) return;
    if(L == arr.length) {
      if (total - sum == sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0,0);
  return answer;
}

console.log(solution(arr));
