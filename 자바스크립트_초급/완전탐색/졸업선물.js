let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];

function sol(array) {
  let answer = 0;
  const n = array.length;
  const money = 28;

  for (let i = 0; i < n; i++) {
    let copy = array.slice();
    let sum = 0;
    let temp = 0;
    copy[i][0] = copy[i][0] / 2;
    for (let j = 0; j < n; j++) {
      sum += copy[j][0] + copy[j][1];
      if (sum <= money) {
        temp++
      }
    }
    answer = Math.max(answer, temp);
  }

  return answer;
}

console.log(sol(arr));