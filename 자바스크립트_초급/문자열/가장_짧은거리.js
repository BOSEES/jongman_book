let str = "teachermode e";

function sol(s) {
  let answer = [];
  const a = s.split(" ");
  const b = a[0];
  const target = a[1];
  let p = 1000;

  for (let i = 0; i < b.length; i++) {
    if(b[i] === target) {
      p = 0;
      answer.push(p)
    } else {
      p++;
      answer.push(p)
    }
  }
  p = 0;
  for (let i = b.length - 1; i >= 0; i--) {
    if(b[i] === target) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  
  return answer;
}

console.log(sol(str));