// let str="teachermode";
let str="dfhjeeefjjfa";
function solution(str, target) {
  let answer = [];
  let count = str.length;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== target) {
      count += 1;
      answer.push(count)
    } else {
      count = 0;
      answer.push(count);
    }
  }
  count = str.length;
  for (let i = 0; i < str.length; i++) {
    if (str[str.length - 1 - i] !== target) {
      count += 1;
      if(answer[str.length - 1 - i] > count) {
        answer[str.length - 1 - i] = count;
      }
    } else {
      count = 0;
    }
  }
  
  return answer.join(" ")
}

console.log(solution(str, 'e'));