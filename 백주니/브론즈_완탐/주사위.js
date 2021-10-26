let input = `3 2 3`;

input = input.split(" ").map((e) => parseInt(e));
function sol(dice) {
  let s1 = dice[0];
  let s2 = dice[1];
  let s3 = dice[2];
  let map = new Map();

  for (let i = 1; i <= s1; i++) {
    for (let j = 1; j <= s2; j++) {
      for (let k = 1; k <= s3; k++) {
        let temp = i + j + k;
        if(map.has(temp)) {
          map.set(temp, map.get(temp) + 1);
        } else {
          map.set(temp, 1);
        }
      }
    }
  }

  let array = [...map.entries()];

  array.sort((a, b) => {
    if (a[1] < b[1]) return b[1] - a[1];
    else if (a[1] === b[1]) {
      return a[0] - b[0];
    }
  })

  return array[0][0];
}

console.log(sol(input));