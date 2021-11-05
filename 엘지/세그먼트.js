let input = 24;

function sol(n) {
  let answer = 0;
  let segment = [6,2,5,5,4,5,6,4,7,9];
  let operator = [2,2,1,1]; // + * - /

  for (let i = 0; i < segment.length; i++) {
    for (let j = 0; j < segment.length; j++) {
      if (i + j >= 0){
        if (segment[i] + segment[j] + operator[0] === n) {
          answer++
        }
      }
      if (i * j >= 0){
        if (segment[i] + segment[j] + operator[1] === n) {
          answer++
        }
      }
      if (i / j >= 0){
        if (segment[i] + segment[j] + operator[2] === n) {
          answer++
        }
      }
      if (i - j >= 0){
        if (segment[i] + segment[j] + operator[3] === n) {
          answer++
        } 
      }
    }
  }

  return answer;
}

console.log(sol(input))