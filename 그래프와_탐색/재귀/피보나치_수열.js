
function solution(n) {
  // for (let i = 1; i < 15; i++) {
  //   console.log(fibo(i));
  // }
    function fibo(n) {
      console.log(n)
      if (n == 1) return 0;
      else if (n == 2) return 1;
      else return fibo(n - 1) + fibo(n - 2);
    }
  return fibo(n)
}

console.log(solution(7));