function sol(num) {
  let answer = "";
  function recusive(num) {
    if (num <= 1) return answer += 1;
    else {
      recusive(parseInt(num / 2));
      answer += num % 2
    }
  }
  recusive(num);

  return answer;
}

console.log(sol(5));