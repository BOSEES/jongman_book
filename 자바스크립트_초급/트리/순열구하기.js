// let input = [3, 6, 9];

// function sol(numArray, targetLength) {
//   const answer = [];
//   const temp = Array.from({length: targetLength}, () => 0);
//   const ch = Array.from({length: numArray.length}, () => 0);
//   function DFS(L) {
//     if (L >= targetLength) {
//       answer.push(temp.slice());
//     } else {
//       for (let i = 0; i < numArray.length; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           temp[L] = numArray[i];
//           DFS(L + 1);
//           ch[i] = 0;
//         }
//       }
//     }
//   }

//   DFS(0)
//   return answer;
// }

// console.log(sol(input, 2))

// function combie(order, num) {
//   order = order.split("");
//   let answer = [];
//   let temp = Array.from({length: num}, () => 0)
//   let ch = new Set();
//   function DFS(L) {
//       if (L >= num) {
//           answer.push(temp.join(""));
//       } else {
//           for (let i = 0; i < order.length; i++) {
//             if (!ch.has(order[i])) {
//               ch.add(order[i]);
//               temp[L] = order[i];
//               DFS(L + 1);
//               ch.delete(order[i]);
//             }
//           }
//       }
//   }
//   DFS(0);
//   return answer;
// }

// console.log(combie("ABCDE", 2));

function combie(order, num) {
  order = order.split("");
  let answer = [];
  let temp = Array.from({length: num}, () => 0)
  
  function DFS(L, s) {
      if (L >= num) {
          answer.push(temp.join(""));
      } else {
          for (let i = s; i < order.length; i++) {
                  temp[L] = order[i];
                  DFS(L + 1, s + 1);    
              }
      }
  }
  DFS(0, 0);
  return answer;
}