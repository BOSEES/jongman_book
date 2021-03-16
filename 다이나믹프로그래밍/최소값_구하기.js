function solution(a, b, c){
  let result = a;
  if (result > b) {
    result = b;
  }
  if (result > c) {
    result = c;
  }

  return result;
}

console.log(solution(6, 5, 11));