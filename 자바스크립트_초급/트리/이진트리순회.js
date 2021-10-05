function sol(v) {
  let answer = ""
  function DFS(v){
    if (v > 7) return;
    else {
      DFS(v * 2)//왼쪽 자식;
      DFS(v * 2 + 1)//오른쪽 자식;
      answer += v + " ";
    }
  }
  DFS(v);

  return answer.trim();
}

console.log(sol(1));