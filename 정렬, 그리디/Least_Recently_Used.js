let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];

function solution(cacheSize, arr) {
  let cache = [];
  for (let i = 0; i < arr.length; i++) {
    if(cache.length < cacheSize && !cache.includes(arr[i])) {
      cache.unshift(arr[i]);
    } else if(cache.includes(arr[i])) {
      cache.splice(cache.indexOf(arr[i]), 1);
      cache.unshift(arr[i]);
    } else {
      cache.pop();
      cache.unshift(arr[i]);
    }
    console.log(cache)
  }
  
  // return cache;
}

console.log(solution(5, arr));