let input = [3, 6, 9];

function sol(numArray, targetLength) {
  const answer = [];
  const temp = Array.from({length: targetLength}, () => 0);
  const ch = Array.from({length: numArray.length}, () => 0);
  function DFS(L) {
    if (L >= targetLength) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < numArray.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[L] = numArray[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0)
  return answer;
}

console.log(sol(input, 2))