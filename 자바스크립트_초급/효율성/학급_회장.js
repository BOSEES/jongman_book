let str="BACBACCACCBDEDE";

function solution(papers){
  let answer = ""
  const map = new Map();

  for (let i = 0; i < papers.length; i++) {
    if(!map.get(papers[i])) {
      map.set(papers[i], 1);
    } else {
      map.set(papers[i], map.get(papers[i]) + 1);
    }
  }
  let max = 0;
  for (let i of map) {
    if ( max < i[1]) {
      max += i[1];
      answer = i[0];
    }
  }

  return answer;
}

console.log(solution(str));