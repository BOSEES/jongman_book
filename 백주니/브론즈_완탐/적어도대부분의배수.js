let input = `30 45 23 26 56`;

input = input.split(" ");

function sol(data) { 
  let answer = Math.min.apply(null, data);
  while(true) {
    let count = 0;
    for(let i = 0; i < data.length; i++) {
      if(answer % data[i] === 0) count++;
    }
    if (count >= 3) return answer;
    else answer++;
  }
}

console.log(sol(input));