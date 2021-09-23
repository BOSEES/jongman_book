let str="g0en2T0s8eSoft";

function sol(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) result += s[i];
  }
  return parseInt(result, 10);
}

console.log(sol(str));