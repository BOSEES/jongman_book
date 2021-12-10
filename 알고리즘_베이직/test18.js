const powerSet = function (str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  const ch = Array.from({length: str.length}, () => false);
  str = [...new Set(str.split("").sort())];

  function DFS(L) {
    if (L >= str.length) {
      let temp = "";
      for (let i = 0; i < str.length; i++) {
        if (ch[i]) temp += str[i];
      }
      result.push(temp);
    } else {
      ch[L] = true;
      DFS(L + 1);
      ch[L] = false;
      DFS(L + 1);
    }
  }

  DFS(0);
  return result.sort();
};

let output1 = powerSet('bbaaa');
console.log(output1); 