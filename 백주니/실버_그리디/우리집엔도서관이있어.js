let input = `3
3
2
1`;

input = input.split("\n").map((e) => parseInt(e));

function sol(data) {
  const n = data.shift();
  let answer = 0; 
  let max = Math.max.apply(null, data);


  while() {

  }
  for (let i = n - 1; i >= 0; i--) {
    if (max === data[i]) max--;
    else if (max - 1 === data[i]){
      continue;
    } else {
      
    }
  }


  return answer;
}

console.log(sol(input));