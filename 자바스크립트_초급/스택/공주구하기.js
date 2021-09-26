function solution(p, target) {
  let answer = 0;
  const queue = Array.from({length: p}, (v, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < target; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));