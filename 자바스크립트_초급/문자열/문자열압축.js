let str = "KKHSSSSSSSE";

function sol(s) {
  let result = s[0];
  let count = 1;
  for (let i = 0; i < s.length - 1; i++) {

    if(s[i] === s[i + 1]) {
      count++;
    } else {
      if (count === 1) {
        result += s[i + 1];
      } else {
        result += count + s[i + 1];
        count = 1;
      }
    }
  }

  return result;
}

console.log(sol(str));