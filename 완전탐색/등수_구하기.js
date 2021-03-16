let arr=[87, 89, 100, 100, 76];

function solution(arr) {
  let rank = [];

  for (let i of arr) {
    let count = 1;
    for (let j of arr) {
      if (i < j) {
        count++
      }
    }
    rank.push(count);
  }
  return rank;
}

console.log(solution(arr));