let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];

function sol(array) {
  let result = [];
  array = array.map((e)=> String(e))
  
  array = array.map((e) => e.split("").reverse().join(""));

  for (let i = 0; i < array.length; i++) {
    let num = parseInt(array[i], 10);
    if (isPrime(num)) {
      result.push(num);
    }
  }
  return result.join(" ");
}



function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i < Math.floor(num/2); i++) {
    if(num % i === 0) {
      return false;
    }
  };
  return true;
}

console.log(sol(arr));