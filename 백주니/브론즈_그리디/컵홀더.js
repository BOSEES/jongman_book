let input = `3
SSS`;

input = input.split("\n");

function sol(data) {
  let answer = 1;
  let n = parseInt(data.shift());
  let s = 0;
  let ll = 0;

  for (let i = 0; i < n; i++) {
    if (data[0][i] === "S")s++;
    else ll++;
  }

  answer += s + (ll / 2);
  
  if(answer > n )return n; 
  else return answer;
}

console.log(sol(input))