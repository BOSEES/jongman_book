let arr=[137, 460, 603, 40, 521, 128, 123];

function sol(num) {
  let result;
  let parseStringArray = arr.map((e) => String(e));
  let max = 0;
  for (let i = 0; i < parseStringArray.length; i++) {
    let temp = 0;
    for (let j = 0; j < parseStringArray[i].length; j++) {
      temp += parseInt(parseStringArray[i][j],10); 
    }
    if (max < temp) {
      result = parseStringArray[i];
      max = temp;
    } else if(max == temp) {
      result = Math.max(result, parseStringArray[i]);
    }
  }
  return result;
}

console.log(sol(arr));