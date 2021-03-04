let input = [8,9]

function sol(input) {
  let N = input[0];
  let M = input[1];
  let arr = [];
  let max = 0;
  
  for (let i = 1; i <= M; i++ ) {
    let num = (N * i);
    let reverse = num.toString().split("").reverse().join("");
    arr.push(parseInt(reverse, 10));
  }
  console.log(arr)
  for (let e of arr) {
    let count = Math.max(max,e);
    max = count;
  }
  return max;
}

sol(input);