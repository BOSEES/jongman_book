let answer = [];

for (let i = 2; i <= 9; i++) {
  let arr = [];
  for (let j = 1; j <= 9; j++) {
    arr.push(`${i} * ${j} = ${i * j}`);
    if (arr[arr.length - 1].length > 9) {
      for (let s = 0; s < 3; s++) {
        arr[arr.length - 1] += " ";
      }
    } else {
      for (let g = 0; g < 4; g++) {
        arr[arr.length - 1] += " ";
      }
    }
  }
  answer.push(arr);
  if (answer.length == 4) {
    for (let k = 0; k < 9; k++) {
      console.log(`${answer[0][k]}${answer[1][k]}${answer[2][k]}${answer[3][k]}`);
    }
    answer = [];
    console.log("\n");
  }
}