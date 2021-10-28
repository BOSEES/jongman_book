function sol(num, targetlength) {
  let answer = [];
  let temp = Array.from({length: targetlength}, () => 0);
  let ch = Array.from({length: num + 1}, () => 0);

  function DFS(L) {
    if (L >= targetlength) {
      answer.push(temp.slice());
    } else {
      for (let i = 1; i < num + 1; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[L] = i;
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0)
  return answer;
}

console.log(sol(10,3));