function sol(n) {
  let answer = 0;
  let count = 1;
  
  while (n > 0) {
    answer++;
    if (count < n) {
      n -= count;
      count++;
    } else {
      count = 1;
      n -= count;
      count++;
    }
  }
  return answer;
}

console.log(sol(14));