let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"
let output2 = letterCapitalize('javascript  is sexy ');
console.log(output2); // "Javascript  Is Sexy "

function letterCapitalize(str) {
  let flag = 0;
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      answer += " "
      flag = 0;
    } else if (flag) {
      answer += str[i]
    } else {
      answer += str[i].toUpperCase();
      flag = 1;
    }
  }

  return answer;
}
