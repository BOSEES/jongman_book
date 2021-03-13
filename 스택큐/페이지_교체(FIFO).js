const page = "ABCDABEA";
const frame = 3;

function fifo(page, frame) {
  let pageArr = page.split("");
  let stack = [];
  let result = 0;
  let count = 0;
  
  for (let i in pageArr) {
    if (!stack.includes(pageArr[i]) && stack.length < frame) {
      result += 6;
      stack.push(pageArr[i]);
      // console.log(stack);
    } else if (!stack.includes(pageArr[i]) && stack.length >= frame) {
      if (count == frame) {
        count = 0;
      }
      result += 6;
      stack.splice(count,1,pageArr[i]);
      count++;
    } else if (stack.includes(pageArr[i])) {
      result += 1;
    }
  }
  console.log(stack);
  return result;
}

console.log(fifo(page, frame));

//1.아무것도 없는경우
//2.같은게 있는경우
//3.같은게 없지만 스택을 초과하는 경우.