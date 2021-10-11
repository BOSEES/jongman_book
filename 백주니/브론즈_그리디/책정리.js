let input = `4 5
3 4 5 6
3 3 3 3 3`

input = input.split("\n").map((e) => e.split(" "));

function sol(data) {
  let answer = 0;
  let n = data.shift();
  let boxs = data[0].map((e) => parseInt(e));
  let books = data[1].map((e) => parseInt(e));
  let p1 = 0;
  let p2 = 0;
  
  while(p2 < books.length) {
    if (boxs[p1] - books[p2] >= 0) {
      boxs[p1] = boxs[p1] - books[p2];
      p2++;
    } else {
      p1++;
    }
  }

  answer = boxs.reduce((a, b) => a + b, 0);

  return answer; 
}

console.log(sol(input))