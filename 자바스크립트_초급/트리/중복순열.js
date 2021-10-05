function sol(beads, targetLength) {
  let answer = [];
  let temp = Array.from({length: targetLength}, () => 0);

  function DFS(L) {
    if (L >= targetLength) {
      answer.push(temp.slice());
    } else {
      for(let i = 1; i < beads + 1; i++) {
        temp[L] = i;
        DFS(L + 1);
      }
    }
  }
  DFS(0);
  return answer;
}

function solution(n, m){
  let answer=[];
  let tmp=Array.from({length:m}, ()=>0);
  function DFS(L){
      if(L===m){
          answer.push(tmp.slice());
      }
      else{
          for(let i=1; i<=n; i++){
              tmp[L]=i;
              DFS(L+1);
          }
      }   
  }
  
  DFS(0);
  return answer;
}

console.log(sol(3, 2));