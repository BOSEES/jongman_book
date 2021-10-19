let input = [1,2,8,4,9];
let target = 3;
function sol(homes) {
  homes.sort((a, b) => a - b);
  let answer = 0;
  const n = homes.length;
  let min = homes[0];
  let max = homes[n - 1] - homes[0];
  
  while(min <= max) {
    let mid = parseInt((max + min) / 2);
    let count = 1
    let value = homes[0];
    for (let i = 1; i < n; i++) {
      if (homes[i] - value >= mid) {
        count++;
        value = homes[i];
      }
    }

    if (count >= target) {
      answer = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return answer;
}

console.log(sol(input));