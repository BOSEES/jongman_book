let input = `5 8 17`;


input = input.split(" ").map((e) => parseInt(e));

function sol(data) {
  let answer = 0;
  let L = data[0];
  let P = data[1];
  let V = data[2];

  if (V - P >= 0) {
    answer += L * parseInt((V / P));
    V = V % P;
  }

  if (V > L) {
    answer += L;
  } else {
    answer += V;
  }
  
  return answer;
}

console.log(sol(input))