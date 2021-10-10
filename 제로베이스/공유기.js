let input = [1,2,8,4,9];

function sol(data) {
  let result = 0;
  data.sort((a, b) => a - b);

  let min = data[1] - data[0];
  let max = data[data.length - 1] - data[0]; 
  
  while (min <= max) {
    let mid = parseInt((min + max) / 2);
    let count = 1;
    let value = data[0];
    for (let i = 1; i < data.length; i++) {
      if (data[i] > value + mid) {
        value = data[i];
        count++;
      }
    }

    if (count >= 3) {
      min = mid + 1;
      result = mid;
    } else {
      max = mid - 1;
    }
  }

  return result;
}

console.log(sol(input));