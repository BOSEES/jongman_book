let input = [[1,0,0],[1,1,0],[1,1,0],[1,0,1],[1,1,0],[0,1,1]];
let r = 2;
function solution(needs, r) {
  let answer = 0;
  let arr = DFS(r);
  let parts = [];
  let count = 0;
  for (let i = 0; i < needs.length; i++) {
    let cc = []
    for (let j = 0; j < needs[i].length; j++) {
      if (needs[i][j] == 1) {
        cc.push(j);
      }
    }
    parts.push(cc);
  }

  for (let k = 0; k < arr.length; k++) {
    for (let j = 0; j < parts.length; j++) {
        if (parts[j].length == 1) {
          if (arr[k][0] == parts[j][0]) count++;
          } 
          else if (arr[k][0] == parts[j][0] && arr[k][1] == parts[j][1] ) {
          count++
        }
      }
      answer = Math.max(answer, count);
      count = 0;
  }
  return answer;
}

function DFS(r) {
  let arr = [];
  let temp = Array.from({length : r}, () => 0);

  function a(L,num) {
    if (L == r) {
      arr.push(temp.slice());
    } else {
      for (let i = num; i <= r; i++) {
        temp[L] = i;
        a(L + 1, i + 1);
      }
    }
  }
  a(0,0);
  return arr;
}
console.log(solution(input, r));