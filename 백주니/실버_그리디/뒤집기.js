let input = "010101011";

function sol(str) {
  let answer = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      answer++
    }
  }

  return parseInt((answer + 1) / 2) 
}

console.log(sol(input))