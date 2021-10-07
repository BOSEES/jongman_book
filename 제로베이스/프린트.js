let input = `3
1 0
5
4 2
1 2 3 4
6 0
1 1 9 1 1 1`;

// function sol() {

// }
let data = input.split("\n").map((e) => e.split(" ").map((x) => parseInt(x)));

function sol(printer) {
  printer.shift();
  let answer = [];

  for (let i = 0; i < printer.length; i += 2) {
    let index = printer[i][1];
    let papers = printer[i + 1];
    let count = 0;
    
    while(true) {
      if (papers[0] === Math.max(...papers)) {
        count++;
        if (index === 0) {
          answer.push(count);
          break;
        } else {
          index--;
          papers.shift();
        }
      } else {
        if (index === 0) {
          papers.push(papers.shift());
          index = papers.length - 1;
        } else {
          index--;
          papers.push(papers.shift());
        }
      }
    }
  }
  return answer.join("\n");
}


console.log(sol(data));