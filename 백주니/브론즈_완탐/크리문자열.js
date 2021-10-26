let input = `6789789`;

function sol(data) {
  for (let i = 0; i < data.length; i++) {
    let temp = ""
    for (let j = i; j < data.length; j++) {
      temp += data[j];
    }
    if (temp.length % 2 === 0) {
      if (check(temp)) return temp.length;
    } else {
      continue;
    }
  }
}

function check(string) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < string.length/2; i++) {
    left += parseInt(string[i])
    right += parseInt(string[string.length - 1 - i]);
  }
  if (left === right) {
    return true
  }
  return false
}

console.log(sol(input));