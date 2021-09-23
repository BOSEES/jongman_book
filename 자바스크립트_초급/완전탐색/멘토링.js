let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];

function sol(score) {
  let answer = 0;
  const n = 4;
  const m = 3;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let flag = 1;
      for (let k = 0; k < m; k++) {
        let p1 = 0;
        let p2 = 0;
        for (let s = 0; s < n; s++) {
          if (score[k][s] === i) p1 = s;
          if (score[k][s] === j) p2 = s;
        }
        if (p1 > p2) {
          flag++
        }
      }
      if(flag == m) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(sol(arr));