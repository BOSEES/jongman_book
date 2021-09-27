let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];

function solution(n, works) {
  let answer = "";
  let memory = Array.from({length: n}, () => 0);

  for (let i = 0; i < works.length; i++) {
    let temp = works[i];
    let flag = 0;
    for (let j = 0; j < n; j++) {
      if (memory[j] === works[i]) {
        for (let k = j; k > 0; k--) {
          memory[k] = memory[k - 1];
        }
        memory[0] = temp;
        break;
      } else {
        flag++;
      }
    }

    if(flag === 5) {
      for (let k = memory.length - 1; k > 0; k--) {
        memory[k] = memory[k - 1];
      }
      memory[0] = temp;
    }
  }

  console.log(memory);
  return answer;
}

console.log(solution(5, arr));