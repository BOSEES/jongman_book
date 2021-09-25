let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";

function solution(s) {
  let answer = "";
  let array = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") array.push("(");
    else if (s[i] === ")") array.pop();
    else {
      if (array.length === 0) answer += s[i];
    }
  }

  return answer;
}

console.log(solution(str));