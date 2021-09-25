let a="AbaAeCe";
let b="baeeACA";

function solution(str1, str2) {
  let answer = "yes";
  const map = new Map();
  const n = str1.length;

  for (let i = 0; i < n; i++) {
    if (map.has(str1[i])) {
      map.set(str1[i], map.get(str1[i]) + 1);
    } else {
      map.set(str1[i], 1);
    }
  }

  for (let i = 0; i < n; i++) {
    if (map.has(str2[i])) {
      if (map.get(str2[i]) === 0) {
        return "no";
      }
      map.set(str2[i], map.get(str2[i]) - 1);
    } else {
      return "no"
    }
  }

  console.log(map)
  return answer;
}

console.log(solution(a, b));