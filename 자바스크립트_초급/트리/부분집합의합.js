let arr=[1, 3, 5, 6, 7, 10];

//Bad code.
// function solution(data) {
//   let answer = "NO";
//   let ch = Array.from({length: data.length}, () => 0);
//   function DFS(index) {
//     if(index >= data.length) {
//       let temp1 = 0;
//       let temp2 = 0;
//       for (let i = 0; i < data.length; i++) {
//         if (ch[i] === 1) {
//           temp1 += data[i];
//         } else {
//           temp2 += data[i];
//         }
//       }
//       if (temp1 === temp2) {
//         answer = "YES";
//         return;
//       }
//     } else {
//       ch[index] = 1;
//       DFS(index + 1);
//       ch[index] = 0;
//       DFS(index + 1);
//     }
//   }

//   DFS(0);
//   return answer;
// }

//Good code.
function solution (data) {
  let answer = "NO";
  let total = data.reduce((a, b) => a + b, 0);
  let flag = 0;
  function DFS(L, sum) {
    if (flag) return;
    if (L >= data.length) {
      if(total/2 === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L+1, sum + data[L]);
      DFS(L+1, sum);
    }
  }

  DFS(0,0);
  return answer;
}

console.log(solution(arr));