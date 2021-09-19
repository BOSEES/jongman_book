let input = "gooG";

// function sol(input) {
//   const answer = true;
//   let upperCase = input.toUpperCase();

//   for (let i = 0; i < Math.floor(input.length / 2); i++) {
//     if (upperCase[i] !== upperCase[input.length - i - 1]) {
//       return false;
//     }
//   }
//   return answer;
// }

// console.log(sol(input));

function sol(input) {
  let answer = true;
  let upperCase = input.toUpperCase();
  return upperCase.split("").reverse().join("") === upperCase ? answer : false;
}

console.log(sol(input));