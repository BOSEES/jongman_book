let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]

function solution(m, point, time) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = point.length;

  function DFS(L,sumPoint ,sumTime) {
    if(sumTime > m) return
    if (L == n) {
      answer = Math.max(answer, sumPoint);
    } else {
      DFS(L + 1, sumPoint + point[L], sumTime + time[L]);
      DFS(L + 1, sumPoint, sumTime);
    }
  }
  DFS(0,0,0);
  return answer;
}

console.log(solution(20, ps, pt));