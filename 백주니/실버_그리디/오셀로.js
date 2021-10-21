let input = `4
WWBB
BBWB`;

input = input.split("\n");

function sol(data) {
  let answer = 0;
  const n = data[0];
  const a = data[1];
  const b = data[2];
  let W = 0;
  let B = 0;

  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      if (b[i] === "W") {
        W++;
      } else {
        B++;
      }
    }
  }

  while(W > 0 && B > 0) {
    answer++;
    W--;
    B--;
  }

  answer += W;
  answer += B;

  return answer;
}

console.log(sol(input));