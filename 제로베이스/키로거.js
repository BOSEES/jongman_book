let input = `2
<<BP<A>>Cd-
ThIsIsS3Cr3t`;

input = input.split("\n");
// function sol(data) {
//   let n = data.shift();
//   let answer = [];

//   for(let i = 0; i < n; i++) {
//     let temp = [];
//     let str = data[i];
//     let cursor = 0;
    
//     for (let j = 0; j < str.length; j++) {
//       if (str[j] === "<") {
//         if (cursor > 0)  {
//           cursor--;
//         }
//       } else if (str[j] === ">") {
//         if (cursor < temp.length - 1) {
//           cursor++;
//         }
//       } else if (str[j] === "-") {
//         if (temp.length - 1 === cursor) {
//           temp.pop();
//           cursor--;
//         } else if (cursor !== 0) {
//           temp.splice(cursor - 1, cursor);
//           cursor--;
//         }
//       } else {
//         temp.push(str[j]);
//         cursor++;
//       }
//     }
//     answer.push(temp.join(""));
//   }
//   return answer.join("\n");
// }

function sol(data) {
  const n = data.shift();

  for (let i = 0; i < n; i++) {
    let left = [];
    let right = [];
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === "<") {
        if (left.length > 0) {
          right.push(left.pop());
        }
      } else if (data[i][j] === ">") {
        if (right.length > 0) {
          left.push(right.pop());
        }
      } else if (data[i][j] === "-") {
        if(left.length > 0) {
          left.pop()
        }
      } else {
        left.push(data[i][j]);
      }
    }
    console.log(left.join(""));
  }
}

console.log(sol(input))