let arr=[1, 2, 5];

function solution (n, arr) {
  let dy = Array.from({length:n + 1}, () => 1000);
  dy[0] = 0;

  for (let i = 0; i <= arr.length; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      count = dy[j - arr[i]] + 1;
      if (dy[j] > count) dy[j] = count;
    }
  }
  console.log(dy)
  return dy[n];
}

console.log(solution(15, arr));