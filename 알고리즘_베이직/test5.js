let output = isIsogram('aba');
console.log(output); // false

function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = true;
  const checkSet = new Set();
  if (str.length <= 0) result;

  str = str.toLowerCase();
  for (let i of str) {
    if (checkSet.has(i)) {
      return false;
    } else {
      checkSet.set(i, 1);
    }
  }

  return result;
}
