let input = `5 1
3
1
5
3`

let arr = input.split("\n").map((e) => {
  if (e.includes(" ")) {
    return e.split(" ").map((x) => x = parseInt(x, 10));
  } else {
    return e = parseInt(e, 10);
  }
});
let nm = arr.shift();
function solution(game) {
  let answer = 0;
  let n = nm[0];
  let m = nm[1];
  let j = game.shift();

  for (let i = 0; i < j; i++) {
    if (m > game[i]) {
      answer += m - game[i];
      m = game[i]
    } 
    else if (m < game[i]) {
      answer += game[i] - m;
      m = game[i];
    }
    console.log(answer, i)    
  }

  return answer;
}

console.log(solution(arr));