let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];

//버블정렬
// function solution(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if(arr[j][0] > arr[j + 1][0]) {
//         let swap = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = swap;
//       } else if (arr[j][0] == arr[j + 1][0]) {
//         if (arr[j][1] > arr[j + 1][1]) {
//           let swap = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = swap;
//         }
//       }
//     }
//   }
//   return arr
// }

//선택정렬
// function solution(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let idx = i;
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (arr[idx][0] > arr[j][0]) {
//         idx = j;
//       } else if (arr[idx][0] == arr[j][0]) {
//         if (arr[idx][1] > arr[j][1]) {
//           idx = j;
//         }
//       }
//     }
//     let swap = arr[i];
//     arr[i] = arr[idx];
//     arr[idx] = swap;
//   }
//   return arr;
// }

//삽입정렬
function solution(arr) {
  for (let i = 1; i< arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (temp[0] < arr[j][0]) {
        arr[j + 1] = arr[j];
        arr[j] = temp;
      } else if (temp[0] == arr[j][0]) {
        if (temp[1] < arr[j][1]) {
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      } else {
        break;
      }
    }
  }
  return arr;
}
console.log(solution(arr));