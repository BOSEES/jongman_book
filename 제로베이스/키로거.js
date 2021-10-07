let input = `2
<<BP<A>>Cd-
ThIsIsS3Cr3t`;

input = input.split("\n");
function sol(data) {
  let n = data.shift();
  let answer = [];

  for(let i = 0; i < n; i++) {
    let temp = [];
    let str = data[i];
    let cursor = 0;
    
    for (let j = 0; j < str.length; j++) {
      if (str[j] === "<") {
        if (cursor > 0)  {
          cursor--;
        }
      } else if (str[j] === ">") {
        if (cursor < temp.length - 1) {
          cursor++;
        }
      } else if (str[j] === "-") {
        if (temp.length - 1 === cursor) {
          temp.pop();
        } else if (cursor !== 0) {
          temp.splice(cursor - 1, cursor);
        }
      } else {
        temp.push(str[j]);
        cursor++;
      }
    }
    answer.push(temp.join(""));
  }
  return answer.join("\n");
}

console.log(sol(input))