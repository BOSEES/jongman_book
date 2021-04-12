let arr = [5, 3, 7,8,6,2,9,4];

function solution(n) {
  let answer = 0;
  let dy = Array.from({length: n}, () => 0);
  dy[0] = 1;
  for(let i = 1; i < n; i++ ){
    let max = 0;
    for(let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && dy[j] > max) max = dy[j];
    }
    dy[i] = (1 + max);
  }
  answer =Math.max.apply(null, dy);
  return answer;
}

console.log(solution(8));