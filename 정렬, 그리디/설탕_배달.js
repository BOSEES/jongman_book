let input = 11;

// function solution(sugar) {
//   let answer = 0;
//   const big = 5;
//   const small = 3;

//   let bigMax = Math.floor(sugar / big); //2

//   while (bigMax >= 0) {
//     let tempSugar = sugar - bigMax * big; //11 - 2 * 5 = 1
//     if (tempSugar % small == 0) {
//       return (bigMax + tempSugar / small);
//     } else {
//       bigMax--;
//     }
//   }
//   return -1;
// }

function solution(sugar) {
  let bag = 0;

  while (true) {
    if (sugar % 5 === 0) {
      return sugar / 5 + bag;
    } else if (sugar <= 0) {
      return -1;
    }
    sugar -= 3;
    bag++;
  }
}

console.log(solution(input));