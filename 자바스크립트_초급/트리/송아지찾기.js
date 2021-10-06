function solution (position, goal) {
  let answer = 0;
  const ch = Array.from({length: 10001}, () => 0);
  const queue = [];
  queue.push(position);
  ch[position] = position;
  while(queue.length) {
    let p = queue.shift();
    for (let np of [p - 1, p + 1, p + 5]) {
      if (ch[np] !== 0) continue;
      ch[np] = ;
      queue.push(np)
      if (np === goal) return ch[np] + 1;
    }
  }
  return false;
}

console.log(solution(5, 14));