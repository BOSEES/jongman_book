// let output = movingStuff([70, 50, 80, 50], 100);
// console.log(output); // 3

let output = movingStuff([42, 25, 60, 73, 103, 167], 187);
console.log(output); // 4

function movingStuff(stuff, limit) {
  // TODO: 여기에 코드를 작성합니다.
  stuff.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = stuff.length - 1;

  while(left <= right) {
    if (stuff[left] + stuff[right] <= limit) {
      left++;
      right--;
      count++;
    } else {
      right--;
      count++;
    }
  }
  
  return count;
}
