let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];

//[가격, 배송비]
function solution(money, students) {
  let answer = 0;
  students.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
  let n = students.length;

  for (let i = 0; i < n; i++) {
    let m = money - (students[i][0] / 2 + students[i][1]);
    let count = 1;
    for(let j = 0; j < n; j++) {
      if (j !== i && (students[j][0] + students[j][1]) > m) {
        break;
      }

      if (j !== i && (students[j][0] + students[j][1]) <= m) {
        m -= (students[j][0] + students[j][1]);
        count++
      }
    }
    answer = Math.max(answer,count);
  }
  
  return answer;
}

console.log(solution(28, arr));

//학생 수만큼 2중 for문을