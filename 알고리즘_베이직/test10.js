let output = boringBlackjack([1, 2, 3, 4]);
console.log(output); // 3

function boringBlackjack(cards) {
  // TODO: 여기에 코드를 작성합니다.
  // let temp = Array.from({length: 3}, () => 0);
  let result = [];
  let count = 0;
  function DFS(L, start, sum) {
    if (L >= 3) {
      return result.push(sum);
    } else {
      for (let i = start; i < cards.length; i++) {
        DFS(L + 1, i + 1, sum + cards[i])
      }
    }
  }
  DFS(0, 0, 0)

  for (let i of result) {
    if (isPrime(i)) count++;
  }

  return count;
}
// 2를 제외한 자연수 중 나누어 떨어지는 수가 1과 자신뿐인 수
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < Math.floor(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true
}