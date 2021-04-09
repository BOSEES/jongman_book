let input = "55-50+40-20-30+20";

function solution(num) {
  let arr = num.split("-");
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let s = arr[i].split("+").map((e) => e = parseInt(e, 10));
    for (let j = 0; j < s.length; j++ ) {
      count += s[j];
    }
    temp.push(count);
  }

  let result = temp[0];

  for (let i = 1; i < temp.length; i++ ){
    result -= temp[i];
  }
  return result
}

console.log(solution(input));