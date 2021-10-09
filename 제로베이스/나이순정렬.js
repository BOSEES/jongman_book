let input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`

input = input.split("\n").map((e) => e.split(" "));
let n = input[0][0]
// function sol(data) {
//   let answer = "";
//   data.shift();
//   for (let i = 1; i < n; i++) {
//     let temp = data[i];
//     for (let j = i - 1; j >= 0; j--) {
//       if (parseInt(data[j][0]) > parseInt(temp[0])) {
//         data[j + 1] = data[j];
//         data[j] = temp;
//       } else if (parseInt(data[j][0]) === parseInt(temp[0])) {
//         let temp2 = data[j + 1];
//         data[j + 1] = temp;
//         data[i] = temp2;
//       } else {
//         break;
//       }
//     }
//   }
//   answer = data.map((e) => e.join(" ")).join("\n");
//   return answer;
// }

function sol(data) {
  data.shift();
  let answer = data.sort((a, b) => {
    return a[0] - b[0];
  })
  answer = data.map((e) => e.join(" ")).join("\n");
  return answer;
}

console.log(sol(input))