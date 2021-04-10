let input = `11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14`;

let arr = input.split("\n").map((e) => e.split(" ").map((x) => x = parseInt(x, 10)));
let n = arr.shift();
n = n[0];

function solution(time) {
  let answer = 0;
  let end = 0;
  let path = [];
  for(let i = 0; i < time.length; i++) {
    if(time[i][0] >= end) {
      end = time[i][1];
      answer++;
      path.push(time[i]);
    }
  }
  console.log(path);
  return answer;
}

console.log(solution(arr))