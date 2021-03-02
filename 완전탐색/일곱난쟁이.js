let input = "20 7 23 19 10 15 25 8 13";
let array = input.split(" ").map((e) => parseInt(e, 10)).sort((a, b) => a - b);

function test(a) {
  let sum9 = 0;
  for (let i = 0; i < a.length; i++) {
    sum9 += a[i];
  }

  for(let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++){
      let sum7 = sum9 - (a[i] + a[j])
      if (sum7 == 100) {
        for (let k = 0; k < a.length; k++){
          if (a[k] !== a[i] && a[k] !== a[j]) {
            console.log(a[k])
          }
        }
      }
    }
  }
}

test(array);