let input = 5;

function sol(n) {
  let answer = 0;
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        if (String(i).indexOf("3") !== -1
          || String(j).indexOf("3") !== -1
          || String(k).indexOf("3") !== -1) {
            console.log(String(i))
          answer++;
        }
      }
    }
  }
  return answer;
}

console.log(sol(input));