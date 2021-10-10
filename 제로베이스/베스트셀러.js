let input = `5
top
top
top
top
aop
aop
aop
aop
kimtop`;
input = input.split("\n");
function sol(data) {
  let answer = "";
  const n = data.shift();
  const map = new Map();
  console.log(data);

  for (let i of data) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }

  answer = [...map.entries()].sort((a, b) => {
    if (a[1] > b[1]) {
      return b[1] - a[1];
    } else if (a[1] === b[1]) {
      if (a[0].charCodeAt(0) > b[0].charCodeAt(0)) {
        return a[0].charCodeAt(0) - b[0].charCodeAt(0);
      } else {
        return b[0].charCodeAt(0) - a[0].charCodeAt(0);
      }
    }
  })


  return answer[0][0];
}

console.log(sol(input));
