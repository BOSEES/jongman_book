let input = `a a a a a
a a`

input = input.split("\n")

function sol(data) {
  let answer = 0;
  let n = data[0].length;
  let index = 0;
  for (let i of data[0]) {
    if (i === data[1][index]) {
      index++
    } else {
      index = 0;
    }
    if (index === data[1].length) {
      index = 0
      answer++
    }
  }

  return answer;
}

console.log(sol(input));