let a="bacaAacba";
let b="abc";

function solution(s, t) {
  let answer = 0;
  let p1 = 0;
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < t.length - 1; i++){
    map1.set(s[i], 1);
  }

  for (let x of t) {
    if (map2.has(x)) map2.set(x, map2.get(x) + 1);
    else map2.set(x, 1);
  }
  
  for (let p2 = 2; p2 < s.length; p2++) {
    let count = 0;
    
    if(map1.get(s[p2])) map1.set(s[p2], map1.get(s[p2]) + 1);
    else map1.set(s[p2], 1);

    for(let i = 0; i < t.length; i++) {
      if (map2.get(t[i]) === map1.get(t[i])) {
        count++
      }
    }

    if(count === b.length) {
      answer++;
      map1.set(s[p1], map1.get(s[p1]) - 1);
      p1++;
    } else {
      map1.set(s[p1], map1.get(s[p1]) - 1);
      p1++;
    }
  }
  
  return answer;
}

console.log(solution(a, b));