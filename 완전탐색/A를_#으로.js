let str="BANANA";

function solution(str) {
  let arr = str.split("");

  let arr2 = arr.map((e) => {
    if (e == "A") {
      return e = "#"
    } else {
      return e;
    }
  })
  return arr2.join("");
}

console.log(solution(str));