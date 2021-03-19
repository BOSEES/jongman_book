let str="BACBACDAVSDFALSKDJFLAKWDJFKLVMABAWESCASDCACCBDEDE";

function solution(str) {
  let answer = ""
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if(!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key,value] of Object.entries(obj)) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

console.log(solution(str));