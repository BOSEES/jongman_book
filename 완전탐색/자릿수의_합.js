let arr=[128, 460, 603, 40, 521, 137, 123];

// function solution(n, arr) {
//   let answer;
//   let max = Number.MIN_SAFE_INTEGER; //-9007199254740991;
  
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     let tmp = arr[i];
//     while (tmp) {
//       sum += (tmp % 10);
//       tmp = Math.floor(tmp / 10);
//     }

//     if (sum > max) {
//       max = sum;
//       answer = arr[i]; 
//     } else if (sum == max) {
//       if (arr[i] > answer) {
//         answer = arr[i];
//       }
//     }
//   }
//   return answer;
// }



function solution(n, arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i].toString().split("").reduce((a, b) => a + parseInt(b, 10), 0);
    
    if(sum>max){
      max=sum;
      answer=arr[i];
    }
    else if(sum===max){
      if(arr[i]>answer) answer=arr[i];
    }
  }
  return answer;
}


console.log(solution(7, arr));