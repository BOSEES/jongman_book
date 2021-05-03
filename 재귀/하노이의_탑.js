function solution(num) {
  let answer = 0;
  let route = [];
  function hanoi(num, start,temp, end) {
    if (num == 1) {
      answer++;
      route.push([start, end]);
      return
    } else {
      hanoi(num - 1, start, end, temp);
      answer++
      route.push([start, end]);
      hanoi(num - 1, temp, start, end);
    }
  }

  hanoi(num, "A", "B", "C");
  console.log(route)
  return answer;
}



console.log(solution(3))