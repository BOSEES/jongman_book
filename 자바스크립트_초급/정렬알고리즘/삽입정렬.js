let arr=[11, 7, 5, 6, 10, 9];

function solution(array) {
  let answer = array;

  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (array[j] > temp) {
        array[j + 1] = array[j];
      } else {
        break;
      }
    }
    array[j + 1] = temp;
  }

  return answer;
}

console.log(solution(arr));