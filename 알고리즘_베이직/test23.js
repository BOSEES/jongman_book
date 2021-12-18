const primePassword = (curPwd, newPwd) => {
  // TODO: 여기에 코드를 작성합니다.
  let temp = String(curPwd).split("").map((e) => Number(e));
  let ch = Array.from({length: curPwd.length}, () => false);
  console.log(temp);
  function DFS(L,array) {
    if (!isPrime(array)) {
      return;
    } else {
      for (let i = 0; i < curPwd.length; i++) {
        if (curPwd[i] === newPwd[i]) {
          ch[i] = true;
        } else {
          DFS(L + 1, )
        }
      }
    }
  }

  DFS(0, temp);
  return 
};

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < Math.floor(num / 2); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

console.log(isPrime(8733));

// output = primePassword(3733, 8779);
// console.log(output); // --> 3 (3733 -> 3739 -> 3779 -> 8779)