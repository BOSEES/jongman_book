let input = `1000 20 31`;

input = input.split(" ").map((e) => parseInt(e));

function sol(data) {
  let answer = 0;
  let n = data[0];
  let a = data[1];
  let b = data[2];
  let player = [];

  for (let i = 1; i <= n; i++) {
    player.push(i);
  }
  
  while(true) {
    answer++;
    let temp = [];
    let free;
    if (player.length % 2 !== 0) {
      free = player.pop();
    }
    for (let i = 0; i < player.length; i += 2) {
      if (player[i] === a && player[i + 1] === b) return answer;
      if (player[i] === a || player[i] === b) {
        temp.push(player[i])
      } else if (player[i + 1] === a || player[i + 1] === b) {
        temp.push(player[i + 1]);
      } else {
        temp.push(player[i]);
      }
    }

    if (free) {
      temp.push(free);
      player = temp;
    } else {
      player = temp;
    }
  }
}

console.log(sol(input));

