let input = `ABABCDD`;

function sol(name) { 
  let answer = [];
  let map = new Map();
  name = name.split("");
  name.sort((a,b) => a - b);

  for (let i of name) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  let array = [...map.entries()];

  let ch = 0
  let t = ""

  for (let i of array) {
    if (i[1] % 2 === 0) {
      let count = i[1] / 2;
      for (let j = 0; j < count; j++) {
        answer.push(i[0]);
      }
    } else {
      ch++;
      t = i[0];
    }
  }
  if (ch > 1) return "sorryman";

  let temp = answer.slice().reverse();
  return answer.concat(t, temp).join("");
}

console.log(sol(input));