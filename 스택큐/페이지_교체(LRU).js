function solution(frame, page){
  let runTime = 0;
  let temp = [];

  // frame이 0일때, page의 크기만큼 6을 곱해주고 끝낸다.
  if (frame === 0){
    runTime = page.length * 6;
    return runTime;
  }

  for (let i of page){
    if (temp.includes(i)){
      // hit - 해당 페이지를 삭제하고 맨 뒤에 저장
      temp.splice(temp.indexOf(i), 1);
      temp.push(i);
      runTime += 1;
    } else {
      // 배열이 비었으면 무조건 넣어야 하므로 if문을 사용
      if (temp.length < frame){
        temp.push(i);
      } else {
        // 가장 사용되지 않은 첫번째 배열을 제거하고 맨 뒤에 입력값을 저장
        temp.shift(); 
        temp.push(i);
      }
      // if문 실행에 상관없이 runTime은 10이 추가된다
      runTime += 6;
    }
  }
  return runTime;
}

const f = parseInt(prompt('프레임을 입력해주세요.'), 10);
const page = prompt('페이지를 입력해주세요.').split('');

console.log(solution(f, page));

// const page = "ABCEDF";
// const frame = 0;

// function lru(page, frame) {
//   let result = 0;
//   let pageArr = page.split("");
//   let stack = [];
//   let obj = {};
//   let last = "";
//   let target = "";
//   for (let i in pageArr) {
//     if (stack.includes(pageArr[i])){
//       result += 1;
//     } else {
//       if(stack.length < frame) {
//         stack.push(pageArr[i]);
//         obj[pageArr[i]] = 0;
//         last = pageArr[i];
//         result += 6;
//       } else {
//         stack.splice(stack.indexOf(target),1,pageArr[i]);
//         delete obj[target];
//         obj[pageArr[i]] = 0;
//         last = pageArr[i];
//         result += 6;
//       }
//     }
//     for (let j in obj) {
//       obj[j]++;
//     }
//     for (let key of Object.keys(obj)) {
//       if (key !== last) {
//         target = key;
//       }
//     }
//   }
//   return result;

// //1.stack 안에 없고 stack.length가 frame보다 작으면 push()하고 obj 객체에 카운트 1 추가;
// //2.stack 안에 있다면 count 를 비교하고 1을 제외한 가장 적은 key를 이용하여 객체와 스택에서 제거.
// //3.반복문이 한번 돌때마다 객체안에 모든 원소들의 카운트를 1씩 증가.

// console.log(lru(page, frame));