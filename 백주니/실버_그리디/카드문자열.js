let input = `7
B A C A B A C`;

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") === -1) return parseInt(e);
  else return e.split(" ");
})

function sol(data) {
  let answer = [];
  const n = data[0];
  let card = data[1];
  let pivot = card[0];

  answer.push(pivot);
  for (let i = 1; i < n; i++) {
    if (card[i] > pivot) {
      answer.push(card[i]);
    } else {
      answer.unshift(card[i]);
      pivot = card[i];
    }
  }

  return answer.join("");
}

console.log(sol(input));