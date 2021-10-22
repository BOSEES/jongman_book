let input = `4 2
4 2 3 1`;

input = input.split("\n").map((e) => e.split(" "));

console.log(input)

function sol(data) {
  let nm = data[0];
  let n = parseInt(nm[0]);
  let m = parseInt(nm[1]);
  let card = data[1].map((e) => parseInt(e));

  console.log(card, m, n)

  for (let i = 0; i < m; i++) {
    card.sort((a, b) => a - b);
    let temp = card[0] + card[1];
    card[0] = temp;
    card[1] = temp;
  }

  return card.reduce((a,b) => a + b, 0);
}

console.log(sol(input))