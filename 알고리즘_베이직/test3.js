output = fibonacci(5);


function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  const chArray = Array.from({length: n + 1}, () => 0);

  function DFS(N){
    if (N <= 1) {
      return N;
    } else {
      if (chArray[N] !== 0) {
        return chArray[N];
      }
      chArray[N] = DFS(N - 1) + DFS(N - 2);
      return chArray[N];
    }
  }
  
  return DFS(n);
}


console.log(output); // --> 34