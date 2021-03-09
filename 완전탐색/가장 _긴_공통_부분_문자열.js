const input =`THISISSTRINGS
TATHISISKKQQAEW`;

const arr = input.split(/\n/);

function sol(input) {
  let result = [];

  for (let i = 1; i < input.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      result.push(input.slice(j, j + input.length + 1 - i));
    }
  }
  return result;
}

let inputOne = arr[0];
let inputTwo = arr[1];
let arrOne = sol(inputOne);
let arrTwo = sol(inputTwo);
let inter = arrOne.filter((e) => arrTwo.includes(e));
inter.sort((a, b) => {
  return b.length - a.length;
});

console.log(inter[0].length);

