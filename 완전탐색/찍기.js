let input = [9 , "AAAABBBBB"];

function sol(input) {
  let arr = input[1].split("");
  let a = 0;
  let b = 0;
  let g = 0;

  let obj = {
    "Adrian" : ["A","B","C"],
    "Bruno" : ["B","A","B","C"],
    "Goran" : ["C","C","A","A","B","B"],
  }
  
  for (let i = 0; i < arr.length; i++) {
    if(obj.Adrian[i % 3] == arr[i]) {
      a++
    }
    if(obj.Bruno[i % 4] == arr[i]) {
      b++
    }
    if(obj.Goran[i % 6] == arr[i]) {
      g++
    }
  }

  let result = Math.max(a,b,g);
  console.log(result);
  
  if (a == result) {
    console.log("Adrian");
  }
  if (b == result) {
    console.log("Bruno");
  }
  if (g == result) {
    console.log("Goran");
  }

}

sol(input);