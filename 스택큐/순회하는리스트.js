const inputArr = [10, 20, 25, 27, 34, 35, 39];
const Num = 3;

function sol(inputArr, Num) {
  let inputArr2 = [...inputArr];
  let result = [];
  let index = 0;
  
  for (let i = 0; i < Num; i++) {
    let count = inputArr2.pop();
    inputArr2 = [count, ...inputArr2];
  }

  for (let i = 0; i < inputArr.length; i++){
    result.push(Math.abs(inputArr[i] - inputArr2[i]));
  }

  let min = result[0];
  for (let i in result){
    if (result[i] < min) {
      min = result[i];
      index = i;
    }
  }

  return (`index : ${index}`) + "\n" + (`value : ${inputArr[index]},${inputArr2[index]}`);
}

console.log(sol(inputArr,Num));