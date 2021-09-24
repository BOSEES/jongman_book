let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
let target = 3;

function sol(array) {
  let answer = 0;
  const n = array.length;
  let temp = [];
  const set = new Set();
  
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        set.add(array[i] + array[j] + array[k]);
      }
    }
  }

  temp = [...set].sort((a, b) => b - a);
  answer = temp[target - 1];
  return answer;
}

console.log(sol(arr));