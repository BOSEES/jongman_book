const output1 = newChickenRecipe([1, 10, 1100, 1111], 2);
console.log(output1);

function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.
  let result = [];
  let temp = Array.from({length: choiceNum}, () => 0);
  let filterStuff = stuffArr.filter((a) => {
    let count = 0;
    for (let i = 0; i < String(a).length; i++) {
      if (String(a)[i] === "0") count++
    }
    if (count < 3) return a;
  }).sort((a, b) => a - b);
  let ch = Array.from({length: filterStuff.length}, () => 0);

  function DFS(L) {
    if (L >= choiceNum) {
      return result.push(temp.slice());
    } else {
      for (let i = 0; i < filterStuff.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp[L] = filterStuff[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return result;
}
