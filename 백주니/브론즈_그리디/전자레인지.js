let input = 189;

function sol(data) {
  let answer = "";
  const setting= [300,60,10];

  for (let i = 0; i < 3; i++) {
    if (data % setting[i] >= 0) {
      answer += String(parseInt(data / setting[i])+ " ");
      data = parseInt(data % setting[i]);
    } else {
      answer += "0 "
    }
  }

  if (data !== 0) return -1;

  return answer.trim();
}

console.log(sol(input))