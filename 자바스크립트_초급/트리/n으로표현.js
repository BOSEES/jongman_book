const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

function solution(nums, target) {
  let answer = [];
  const temp = Array.from({length: 4}, () => 0);

  function DFS(L, s) {
    if (L >= 4) {
      if (reducer(temp, target)) {
        answer.push(temp.slice().sort((a, b) => a - b));
      }
    } else {
      for (let i = s; i < nums.length; i++) {
          temp[L] = nums[i];
          DFS(L + 1, i + 1);
      }
    }
  }
  DFS(0,0);
  return answer;
}

function reducer(array, target) {
  let num = array.reduce((a, b) => a + b);
  return num === target ? 1 : 0;
}

console.log(solution(nums, target));