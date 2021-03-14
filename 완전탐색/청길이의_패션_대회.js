// 입출력예시

// 입력
// "1번: 4,2,3 2번: 3 3번: 2,3,4,1 4번: 2,3"

// 출력
// [4, 2, 3, 1]

// 입력
// "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4"

// 출력
// [3, 1, 4, 2]

const input = "1번: 3,1 2번: 4 3번: 2,1,3 4번: 2,1,3,4";
let arr2 = [];
let arr = input.split(" ").forEach((e,index) => {
  if(index % 2 !== 0) {
    arr2.push(e.split(","));
  }
});

function sol(input) {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (!result.includes(parseInt(input[i][j], 10))) {
        result.push(parseInt(input[i][j], 10));
      }
    }
  }
  return result
}

console.log(sol(arr2));