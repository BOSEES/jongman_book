let input = `Union of Computer Programming Contest club contest`;

function sol(str) {
  let answer = "Yes";
  let temp = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i] !== " ") {
      temp += str[i];
    }
  }
  console.log(temp)
  if(temp !== "UCPC") return "No";
  return answer;
}

console.log(sol(input));