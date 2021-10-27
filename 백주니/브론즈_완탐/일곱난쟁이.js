let input = `20
7
23
19
10
15
25
8
13`;

input = input.split("\n").map((e) => parseInt(e));

function sol(data) {
  let n = data.length;
  let sum = data.reduce((a, b) => a + b, 0)
  let array = []
  console.log(sum)

  for (let i = 0; i < n; i++) {
    let temp = data[i];
    for (let j = i + 1; j < n; j++) {
      temp += data[j];
      if(sum - temp === 100) {
        array.push(data[i])
        array.push(data[j]);
      }
    }
  }
  let tempArray = [];
  data = data.forEach((e) => {
    if (e !== array[0] && e !== array[1]) {
      tempArray.push(e);
    }
  })

  return tempArray.sort((a, b) => a - b).join("\n");
}

console.log(sol(input));