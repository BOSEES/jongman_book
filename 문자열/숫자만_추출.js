let str="g0en2T0s8eSoft";

function solution(str) {
  let n = str.replace(/[^0-9]/g, "");
  return parseInt(n, 10);
}

console.log(solution(str));

// function solution(str){
//   let answer="";
//   for(let x of str){
//       if(!isNaN(x)) answer+=x;
//   }  
//   return parseInt(answer);
// }