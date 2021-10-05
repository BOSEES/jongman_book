let arr=[81, 58, 42, 33, 61];

function solution(max, dogs) {
  let answer = 0;

  function DFS(L, sum) {
    if(L >= dogs.length) {
      if (sum < max) {
        answer = Math.max(sum,answer);
      }
    } else {
      DFS(L + 1, sum + dogs[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0,0);

  return answer;
}

console.log(solution(259, arr));