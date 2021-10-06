function sol(cards,targetNumber) {
  let answer = 0;
  let array = [];

  for (let i = 1; i <= cards; i++) {
    array.push(i);
  }

  for (let i = 0; i < cards - 2; i++) {
    let sum = 0;
    for (let j = i + 1; j < cards; j++) {
      for (let k = j + 1; k < cards; k++) {
        sum += array[i] + array[j] + array[k];
      }
      if (targetNumber === sum) return sum;
      if (sum <= targetNumber) {
        answer = Math.max(sum,answer);
      }
    }
  }
  return answer;
}

console.log(sol(5, 21));