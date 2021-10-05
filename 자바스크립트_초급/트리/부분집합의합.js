let arr=[1, 3, 5, 6, 7, 10];

function solution(data) {
  let answer = "NO";
  let sumArray = [];
  let ch = Array.from({length: data.length}, () => 0);
  function DFS(index) {
    if(index >= data.length) {
      let temp = 0;
      for (let i = 0; i < data.length; i++) {
        if (ch[i] === 1) {
          temp += data[i];
        }
      }
      sumArray.push(temp);
    } else {
      ch[index] = 1;
      DFS(index + 1);
      ch[index] = 0;
      DFS(index + 1);
    }
  }

  DFS(0);

  sumArray.sort((a, b) => a - b);
  for (let i = 0; i < sumArray.length - 1; i++) {
    if (sumArray[i] === sumArray[i + 1]) return true;
  }
  return answer;
}

console.log(solution(arr));