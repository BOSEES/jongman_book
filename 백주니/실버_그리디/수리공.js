let input = `5 2
1 2 3 4 5`;

input = input.split("\n").map((e) => e.split(" "));


function sol(data) {
  let answer = 1;
  let n = parseInt(data[0][0]);
  let m = parseInt(data[0][1]);
  let pipe = data[1];
  pipe.sort((a, b) => a - b);

  let index = 0;
  let target = pipe[0];
  
  while(index < n) {
    if ((pipe[index] - target) + 1 <= m) {
      index++;
    } else {
      answer++;
      target = pipe[index];
      index++;
    }
  }

  return answer;
}

console.log(sol(input))