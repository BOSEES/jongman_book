let arr=[23, 87, 65, 12, 57, 32, 99, 81];

// function solution(target, data) {
//   let answer = data.length;
//   data.sort((a, b) => a - b);
  
//   while(data.length !== 1) {
//     let pivot = Math.floor(data.length /2);
//     if (data[pivot] === target) {
//       answer -= pivot - 1;
//       break;
//     }
//     if (data[pivot] > target) {
//       answer -= pivot;
//       data = data.slice(0, pivot);
//     } else {
//       data = data.slice(pivot + 1);
//     }
//   }
//   return answer;
// }

function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let lt = 0;
  let rt = arr.length - 1;

  while(lt <= rt) {
    let mid = parseInt(lt + rt / 2);
    if (arr[mid] === target) {
      answer = mid + 1
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

console.log(solution(23, arr));