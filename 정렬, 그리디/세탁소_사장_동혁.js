let input = `3
124
25
194`


let arr = input.split("\n").map((e) => e = parseInt(e, 10));
//쿼터(Quarter, $0.25)의 개수, 다임(Dime, $0.10)의 개수, 니켈(Nickel, $0.05)의 개수, 페니(Penny, $0.01)
//첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 거스름돈 C를 나타내는 정수 하나로 이루어져 있다. C의 단위는 센트이다. (1달러 = 100센트) (1<=C<=500)
// function solution(money) {
//   let answer = [];
//   let t = money.shift();
  
//   for(let i = 0; i < t; i++) {
//     let change = money[i];
//     let count = "";
//     //쿼터
//     count += parseInt(change / 25) + " ";
//     change = change % 25; 
//     //다임
//     count += parseInt(change / 10) + " ";
//     change = change % 10; 
//     //니켈
//     count += parseInt(change / 5) + " ";
//     change = change % 5; 
//     //페니
//     count += parseInt(change / 1)
//     change = change % 1;
//     answer.push(count);
//   }

//   return answer;
// }

function solution(money) {
  let answer = [];
  let t = money.shift();
  let coin = [25,10,5,1];
  for(let i = 0; i < t; i++) {
    let change = money[i];
    let count = "";
    for (let j = 0; j < 4; j++) {
      count += parseInt(change / coin[j] , 10) + " ";
      change = change % coin[j];
    }
    answer.push(count.trim());
  }
  return answer;
}

console.log(solution(arr));