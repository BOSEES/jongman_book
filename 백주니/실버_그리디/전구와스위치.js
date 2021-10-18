let input = `3
000
010`;

input = input.split("\n");

function sol(data) {
  let answer = 0;
  let n = parseInt(data.shift());
  let a = data[0].split("");
  let b = data[1].split("");

  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      if (i == 0) {
        a[i] = reverse(a[i])
        a[i + 1] = reverse(a[i + 1])
        answer++
      } else if (i === n - 1) {
        a[i - 1] = reverse(a[i - 1]);
        a[i] = reverse(a[i])
        answer++
      } else {
        a[i] = reverse(a[i]);
        a[i - 1] = reverse(a[i - 1]);
        a[i + 1] = reverse(a[i + 1]);
        answer++
      }
    }
    
    if (i - 1 >= 0) {
      if (a[i - 1] != b[i - 1]) {
        a[i - 1] = reverse(a[i - 1]);
        a[i] = reverse(a[i]);
        answer++
      }
    }
  }

  if (a.join("") !== data[1]) return -1;
  
  return answer;
}

function reverse (num) {
  return num == 1 ? 0 : 1;
}

console.log(sol(input));