let score = [[10,5],[25,12],[15,8],[6,3],[7,4]];

function sol(scores, limitTime) {
  let answer = 0;
  let n = score.length;
  function DFS(L, timeSum, score) {
    if (timeSum > limitTime) return;
    if (L >= n) {
      if(limitTime >= timeSum) {
        answer = Math.max(answer, score);
      }
    } else {
      DFS(L + 1, timeSum + scores[L][1],score + scores[L][0]);
      DFS(L + 1, timeSum ,score);
    }
  }
  DFS(0,0,0);
  return answer;
}

console.log(sol(score, 20));