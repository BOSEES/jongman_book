let answer = 0;
let route = [];
function hanoi(n , start, temp, end) {
  if (n == 1){
    answer++;
    route.push([start, end]);
  } else {
    hanoi(n - 1, start, end , temp);
    answer++
    route.push([start, end]);
    hanoi(n - 1, temp, start, end);
  }
  return route
}

console.log(hanoi(3, "A", "B", "C"));