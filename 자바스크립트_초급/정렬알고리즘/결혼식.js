let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];

function solution(data) {
  let answer = 1;

  let x = data.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  })
  let pos = 0;
  for (let i = 1; i < x.length; i++) {
    if (x[pos][1] > x[i][0]) {
      answer++;
    } else {
      pos++;
    }
  }

  return answer;
}

console.log(solution(arr));