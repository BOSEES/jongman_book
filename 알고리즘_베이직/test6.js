let output = numberSearch('Hello6 ');
console.log(output); // --> 1


function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  let length = str.length;
  let sum = 0;
  for (let i of str) {
    console.log(isNaN(i));
    if (i === " ") {
      length--;
    } else if (!isNaN(i)) {
      length--;
      sum += Number(i);
    }
  }

  return Math.round(sum / length);
}
