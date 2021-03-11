// 손오공 야모챠 메지터 비콜로
// 70 10 55 40

const input = `손오공 야모챠 메지터 비콜로
70 10 55 40
`

function sol(input) {
  const inputArr = input.split(/\n/).map((e) => e.split(" "));
  const name = inputArr[0];
  const dish = inputArr[1];
  const obj = {};
  
  for (let i in name) {
    name[i] = [dish[i],name[i]];
  }
  const sortA = bubbleSort(name)
  for (let i = 0; i < sortA.length; i++) {
    obj[sortA[i][1]] = (i + 1);
  }
  return obj;
}

function bubbleSort(arr) { 
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j][0] < arr[j + 1][0]) {
        let value = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = value;
      }
    }
  }
  return arr;
}

console.log(sol(input))