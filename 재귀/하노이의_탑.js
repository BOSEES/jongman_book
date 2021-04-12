function solution(num) {
  let answer = 0;
  let route = [];
  function hanoi(num, start, end, temp) {
    if (num == 1) {
      answer++;
      route.push([start, end]);
      return
    } else {
      hanoi(num - 1, start, temp, end);
      answer++
      route.push([start, end]);
      hanoi(num - 1, temp, end, start);
    }
  }

  hanoi(num, "A", "B", "C");
  console.log(route)
  return answer;
}



console.log(solution(3))