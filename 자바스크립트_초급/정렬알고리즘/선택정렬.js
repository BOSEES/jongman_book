let arr=[13, 5, 11, 7, 23, 15];

function solution(array) {

  for (let i = 0; i < array.length; i++) {
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[index] > array[j]) {
        index = j;
      }
    }
    let temp = array[i];
    array[i] = array[index];
    array[index] = temp;
  }

  console.log(array);
}

console.log(solution(arr));