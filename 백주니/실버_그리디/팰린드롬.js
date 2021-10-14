let input = `AAAABBCCTTWW`;

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

  for (let i of array) {
    if (i[1] % 2 === 0) {
      let count = i[1] / 2;
      for (let j = 0; j < count; j++) {
        answer.push(i[0]);
      }
    } else {
      return "sorry man"
    }
  }

  let temp = answer.slice().reverse();


  return answer.concat(temp).join("");
}

console.log(sol(input));