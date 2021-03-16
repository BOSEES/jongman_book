function solution(a, b, c){
  let result = "YES";
  let sum = a+b+c;
  let max = a;
  if(max < b){
    max = b
  }
  if(max < c){
    max = c
  }
  if(sum - max <= max){
    result = "NO";
  }

  return result;
}

console.log(solution(6, 7, 11));