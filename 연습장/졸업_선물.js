let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];

//할인률을 먹일때 다 한번씩 먹여보면 된다 무식하게. 거기서 가장 높은 카운트를 가진녀석을 리턴;
function solution(money, arr) {
  let answer = 0;
  let n = arr.length;
  let sortArr = arr.sort((a, b) => {
    return a[0] - b[0] || a[1] - b[1];
  })

  for (let i = 0; i < n; i++) {
    let dc = money - (Math.floor(sortArr[i][0] / 2, 10));
    let count = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j && sortArr[j][0] + sortArr[j][1] <= dc) {
        dc -= sortArr[j][0] + sortArr[j][1];
        count++;
      } else {
        break;
      }
      answer = Math.max(answer, count);
    }
  }
  return answer
}

console.log(solution(28, arr));