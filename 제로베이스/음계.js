// let input = "8 7 6 5 4 3 2 1"; //decending
// let input = "1 2 3 4 5 6 7 8 9"; //ascending
let input = "1 3 2 4 6 5 8 7 9"; //mixed

function sol(input) {
  let array = input.split(" ");
  let n = array.length;
  if (check(array) === n - 1) {
    return "ascending";
  } else if (check(array) === 0) {
    return "decending";
  }
  return "mixed";
}

function check(input) {
  let count = 0;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] < input[i + 1]) {
      count++;
    }
  }
  return count;
}

// function sol(input) {
//   const array = input.split(" ").map((e) => parseInt(e));
//   let ascending = true;
//   let decending = true;

//   for (let i = 0; i < array.length - 1; i++) {
//     if (array[i] > array[i + 1]) ascending = false;
//     else decending = false;
//   }

//   if (ascending) {
//     return "ascending";
//   } else if (decending) {
//     return "decending";
//   } else {
//     return "mixed";
//   }  
// }

console.log(sol(input));