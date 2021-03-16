let str=["good", "time", "good", "time", "student"];

function solution(str) {
  
  let result = str.filter((value, index) => {
    if(str.indexOf(value) == index) {
      return value;
    }
  })
  return result;
}

console.log(solution(str));