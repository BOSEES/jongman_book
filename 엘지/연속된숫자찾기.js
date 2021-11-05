let input = `92817101
81711102`;

// 78099 78100

input = input.split("\n");
function sol(data) {
  let s1;
  let s2;

  s1 = change(data[0]);
  s2 = change(data[1]);

  console.log(s1,s2);
  
}

function change(string) {
  let answer = [];
  let p1 = 0;
  let p2 = 1;

  while(p2 < string.length) {
    let temp = ""
    for (let i = 0; i < parseInt(string[p2]); i++) {
      temp += string[p1];
    }
    p1 += 2;
    p2 += 2;
    answer.push(temp);
  }

  return answer;
}

console.log(sol(input))