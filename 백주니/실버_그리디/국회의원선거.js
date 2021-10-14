let input = `6
2
7
7
7
7
7`;


input = input.split("\n");
let n = parseInt(input.shift());

function sol(data) {
  let answer = 0;
  let dasom = parseInt(data.shift());
  data = data.map((e) => parseInt(e)).sort((a, b) => b - a);
  let max = data[0];
  while(dasom <= max) {
    console.log(dasom)
    console.log(data);
    let index = 0;
    for (let i = 0; i < data.length; i++) {
      if (max <= data[i]) {
        max = data[i];
        index = i;
      }
    }

    if (max >= dasom) {
      data[index]--;
      max = data[index];
      dasom++;
      answer++
    }
  }

  return answer;
}

console.log(sol(input))