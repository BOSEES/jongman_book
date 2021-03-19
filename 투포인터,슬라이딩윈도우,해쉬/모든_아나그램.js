let a="bacaAacba";
let b="abc";

function solution(S, T) {
  let answer = 0;
  let mapT = new Map(); // T
  let mapS = new Map(); // a
  let left =0;
  
  //mapS
  for (let i = 0; i < T.length - 1; i++) {
    if (mapS.has(S[i])) mapS.set(S[i], mapS.get(S[i]) + 1);
    else mapS.set(S[i], 1);
  }

  //mapT
  for (let i of T) {
    if(mapT.has(i)) mapT.set(i, mapT.get(i) + 1);
    else mapT.set(i, 1);
  }

  // two pointer & sliding window
  for (let right = T.length - 1; right < S.length; right++) {
    if (mapS.has(S[right])) mapS.set(S[right], mapS.get(S[right]) + 1);
    else mapS.set(S[right], 1);

    if (compareMaps(mapS, mapT)) answer++;
    mapS.set(S[left], mapS.get(S[left]) - 1);
    if (mapS.get(S[left]) == 0) mapS.delete(S[left]);
    left++;
  }
  return answer;
}

function compareMaps(mapS, mapT) {
  if (mapS.size !== mapT.size) return false;
  for(let [key, val] of mapS){
    if(!mapT.has(key) || mapT.get(key)!==val) return false;
  }
  return true
}

console.log(solution(a, b));