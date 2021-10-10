// let input = `ababababa
// aba`;
let input = `a a a a a
a a`;

function sol(data) {
  let answer = 0;
  data = data.split("\n");
  let count = 0;
  
  for (let i = 0; i < data[0].length; i++) {
    if (data[0][i] === data[1][count]) {
      count++
    } else {
      count = 0;
    }
    if (count === 3) {
      answer++
      count = 0;
    }
  }
  return answer;
}

console.log(sol(input));