let input = `10 1`;

input = input.split(" ").map((e) => parseInt(e));

function sol(data) {
  let answer = 0;
  const n = data[0];
  const l = data[1];
  let label = 2;

  for (let i = 1; i < n + 1; i++) {
    let temp = String(label)
    if (temp.indexOf("1") === -1) {
      label++;
      answer = parseInt(temp);
    } else {
      while (temp.indexOf("1") !== -1) {
        label++;
        temp = String(label);
        
        if (temp.indexOf("1") === -1) {
          label++;
          answer = parseInt(temp);
        }
      }
    }
  }
  return answer;
}

console.log(sol(input));