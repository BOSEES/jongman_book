let input = `d3`;

function sol(data) {
  let answer = 0;
  let xy = data.split("");
  let array = [0,"a","b","c","d","e","f","g","h"];
  let x = 0;
  let y = 0;
  let dx = [-2,-1,1,2,2,1,-1,-2];
  let dy = [1,2,2,1,-1,-2,-2,-1];
  y = parseInt(xy[1]);
  for (let i = 1; i < array.length; i ++) {
    if(array[i] === xy[0]) {
      x = i
    }
  }
  for (let i = 0; i < dx.length; i++) {
    let cx = x + dx[i];
    let cy = y + dy[i];
    if (cx >= 1 && cy >= 1) {
      answer++;
    }
  }
  return answer;
}

console.log(sol(input))