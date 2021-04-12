let input = 100;

function solution(second) {
  let answer = '';
  let a = 0;
  let b = 0;
  let c = 0;
  if (second % 10 !== 0) return -1;
  else {
    a = Math.floor(second / 300);
    b = Math.floor((second % 300) / 60);
    c = Math.floor(((second % 300) % 60 ) / 10);
    
    answer += a +" "+ b +" "+ c;
  }

  return answer;
}

console.log(solution(input));