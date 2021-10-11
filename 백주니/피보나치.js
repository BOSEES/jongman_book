let input = `3
0
1
3`

input = input.split("\n").map((e) => parseInt(e));
function sol(data) {
  let n = data.shift();
  let array = [0,0]
  let answer = []
  for(let i = 0; i < n; i++) {
    fibo(data[i]);
    answer.push(array);
    array = [0, 0];
  }

  function fibo(num) {
    if (num === 0) {
      array[num]++
    } else if(num === 1) {
      array[num]++
    } else {
      return fibo(num - 1) + fibo(num - 2);
    }
  }

  answer = answer.map((e) => e.join(" ")).join("\n");

  return answer;
}

console.log(sol(input));