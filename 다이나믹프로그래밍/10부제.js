const arr=[25, 23, 11, 47, 53, 17, 33];

function solution(day, cars) {
  let result = 0;

  for (let i = 0; i < cars.length; i++) {
    if (cars[i] % 10 == day) {
      result++;
    }
  }
  return result
}

console.log(solution(3, arr));

