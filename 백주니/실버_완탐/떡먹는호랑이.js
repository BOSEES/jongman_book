// let input = `6 41`;

// input = input.split(" ").map((e) => parseInt(e));

// function sol(data) {
//   const day = data[0];
//   const riceCake = data[1];

  
// }

// console.log(sol(input))


// function fibonacci(n) {
//   console.log(n)
//   if(n >= 41) {
//     return;
//   }
//   return fibonacci(n+1) + fibonacci(n+2);
// }

// console.log(fibonacci(2));

function sol(day,n) {
  console.log(day)
  if (day >= 6) {
    return n
  } else {
    return sol(day + 1, n + 1) + sol(day + 1, n + 2);
  }
}

console.log(sol(6,2))