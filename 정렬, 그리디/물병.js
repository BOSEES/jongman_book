let input = `5 1`;

let inp = input.split(" ").map((e) => e = parseInt(e, 10));

function solution(nk) {
  let n = nk[0]; //가지고있는 물병
  let k = nk[1];  // 가져가야하는 물병

  if (n <= k) {
    return 0;
  } else {
    let count = n;
    while (true) {
      if (merge(count) <= k) {
        return (count - n);
      } else {
        count++;
      }
    }
  }
}

function merge(num) {
  let answer = 0;
  let number = num;
  //가지고 있는 물병을 최대한으로 합치기. 왜냐하면 일단 합치고 봐야 나중에 가져갈 물병의 수가 작든 크든 유리하기때문에.
  while (true) {
    let a = Math.floor(number / 2, 10); // 2,1,0
    let b = Math.floor(number % 2, 10); // 1,0,1
    answer += b //나머지의 개수 // 1,0,1
    number = a //합친 수 // 2,1,0

    if (number == 0) {
      break;
    }  
  }
  return answer;
}

console.log(solution(inp));