function missHouseMeal(sideDishes) {
  // TODO: 여기에 코드를 작성합니다.
  const result = [];
  const n = sideDishes.length;
  const ch = Array.from({length: n}, () => false);

  function DFS(L){
    if (L >= n) {
      let temp = sideDishes.filter((dish, index) => {
        if (ch[index]) return dish;
      }).sort();
      result.push(temp);
    } else {
      ch[L] = true;
      DFS(L + 1);
      ch[L] = false;
      DFS(L + 1);
    }
  }

  DFS(0)
  return result.sort();
}


let output = missHouseMeal(["eggroll", "kimchi", "fishSoup"]);
console.log(output);