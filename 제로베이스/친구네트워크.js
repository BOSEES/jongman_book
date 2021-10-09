let input = `2
3
Fred Barney
Barney Betty
Betty Wilma
3
Fred Barney
Betty Wilma
Barney Betty`;
let array = []
input = input.split("\n").map((e) => {
  if (e != parseInt(e)) {
    e.split(" ");
  }
});



function sol(data) {
  console.log(data);
}

console.log(sol(input));