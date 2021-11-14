let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log"];

function solution(begin, target, words) {
  let answer = 0;
  const queue = [];
  const visit = Array(words.length);
  
  queue.push([begin, answer]);

  while(queue.length) {
    let [s, cnt] = queue.shift();

    if (s === target) return cnt;

    words.forEach((w, i) => {
      const idx = [...w].reduce((a, c, i) => (c != s[i] ? a.push(i) : a, a), [])

      if (idx.length === 1 && !visit[i]) {
        visit[i] = 1;
        queue.push([w, ++cnt]);
      }
    })
  }

  return answer;
}


console.log(solution(beginWord, endWord, wordList));