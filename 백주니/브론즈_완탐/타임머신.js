let input = `01:01:59`;

input = input.split(":").map((e) => parseInt(e));

function sol(time) {
  let answer = 0;
  const setTime = [12,60,60];
  const h = time[0];
  const m = time[1];
  const s = time[2];

  if (h <= setTime[0] && m <= setTime[1] && s <= setTime[2]) {
    answer++
  }
  if (m <= setTime[0] && h <= setTime[1] && s <= setTime[2]) {
    answer++
  }
  if (m <= setTime[0] && s <= setTime[1] && h <= setTime[2]) {
    answer++
  }
  if (s <= setTime[0] && m <= setTime[1] && h <= setTime[2]) {
    answer++
  }
  if (s <= setTime[0] && h <= setTime[1] && m <= setTime[2]) {
    answer++
  }
  if (h <= setTime[0] && s <= setTime[1] && m <= setTime[2]) {
    answer++
  }
  return answer;
}

console.log(sol(input))