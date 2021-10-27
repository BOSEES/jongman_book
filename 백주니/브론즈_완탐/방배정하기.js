let input = `3 6 9 112`;

input = input.split(" ").map((e) => parseInt(e));

function sol(data) {
  const people = data.pop();
  const room = data;
  for (let i = 0; i <= 50; i++) {
    for (let j = 0; j <= 50; j++) {
      for (let k = 0; k <= 50; k++) {
        const temp = (room[0] * i) + (room[1] * j) + (room[2] * k);
        if (temp === people) {
          return 1
        }
      }
    }
  }
  return false;
}

console.log(sol(input))