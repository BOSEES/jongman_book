let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

function solution(n,k,arr){
  arr.sort((a, b) => b - a);
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        set.add(arr[i]+arr[j]+arr[k]);
      }
    }
  }
  let a = Array.from(set);

  return a[k-1];
}

console.log(solution(10, 3, arr));