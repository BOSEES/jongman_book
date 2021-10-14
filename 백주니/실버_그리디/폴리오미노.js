let input = `XX.XXXXXXXXXX..XXXXXXXX...XXXXXX`;

function sol(poly) {
  let answer = ""
  let a = "AAAA";
  let b = "BB";

  let count = 0;
  if (poly.length === 1) return -1;

  for (let i = 0; i < poly.length; i++) {
    if (poly[i] === "X") {
      count++;
    } else if (poly[i] !== "X") {
      if (count % 2 !==0) {
        return -1
      } else {
        while(count > 0) {
          if (count > 2) {
            answer += a;
            count -= 4;
          } else {
            answer += b;
            count -= 2;
          }
        }
        answer += "."
      }
    }
  }

  if (count) {
    while(count > 0) {
      if (count > 2) {
        answer += a;
        count -= 4;
      } else {
        answer += b;
        count -= 2;
      }
    }
  }
  return answer;
}

console.log(sol(input))