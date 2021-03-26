let arr=[3, 6, 9];

function solution(n, arr) {
  let answer = [];
  let ch = Array.from({length:arr.length},() => 0);
  let temp = Array.from({length:n}, () => 0);
  
  function DFS(L){
    if (L == n) {
      answer.push(temp.slice());
    } else {
      for(let i = 0; i < arr.length; i++) {
        if (ch[i] == 0) {
          ch[i] = 1;
          temp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  }
  DFS(0)
  return answer;
}
console.log(solution(2, arr));