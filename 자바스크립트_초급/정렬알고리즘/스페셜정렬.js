let arr=[1, 2, 3, -3, -2, 5, 6, -6];

function solution(array) {
  let answer = array;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > 0 && array[j + 1] < 0) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return answer;
}

console.log(solution(arr));