function orderOfPresentation (N, K) {
  // TODO: 여기에 코드를 작성합니다.
const combie = [];
const temp = Array.from({length: N}, () => 0);
const ch = Array.from({length: N + 1}, () => 0);

  function DFS(L) {
    if (L === N) {
      combie.push(temp.slice());
    } else {
      for (let i = 1; i <= N; i++) {
        if (ch[i] === 0) {
          temp[L] = i;
          ch[i] = 1;
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0)

  for (let i = 0; i < combie.length; i++) {
    let flag = 1;
    for (let j = 0; j < combie[i].length; j++) {
      if (combie[i][j] !== K[j]) {
        flag = 0;
      }
    }
    if (flag) {
      return i;
    }
  }
}
