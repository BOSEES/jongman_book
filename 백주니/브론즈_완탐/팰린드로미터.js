let input =`100000
100001
000121
00456
0`;

input = input.split("\n");

function sol(data) {
  const n = data.length;
  let answer = [];
  for (let i = 0; i < n - 1; i++) {
    if (check(data[i])) {
      answer.push(0);
    } else {
      let count = 0;
      while (true) {
        count++
        data[i] = plus(data[i]);
        if(check(data[i])) {
          answer.push(count);
          break;
        }
      }
    }
  }

  return answer.join("\n");
}
function plus(str) {
  let answer = "";
  let n = str.length;
  str = parseInt(str);
  str++;
  str = String(str);
  for (let i = 0; i < n -str.length; i++) {
    answer += "0";
  }

  return `${answer+str}`;
}

function check(str) {
  let n = str.length;
  for (let i = 0; i < parseInt(n / 2); i++) {
    if (str[i] !== str[n - i - 1]) {
      return false;
    }
  }
  return true
}

console.log(sol(input)); 