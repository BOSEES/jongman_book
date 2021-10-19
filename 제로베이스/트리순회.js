let tree = {
  "A" : ["B","C"],
  "B" : ["D"],
  "C" : ["E", "F"],
  "D" : ["B"],
  "E" : ["C"],
  "F" : ["C", "G"],
  "G" : ["F"]
}

function sol(data) {
  let answer = "";

  function DFS(v) {
    if () {

    } else {
      console.log(v);
      DFS(data[v][0]);
      DFS(data[v][1]);
    }
  }

  DFS("A")
  return answer;
}

console.log(sol(tree))