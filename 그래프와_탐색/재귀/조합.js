function combination(charsArray, user_input_n) {
  let combi = [];

  function f(pre, charsArray) {
    for (let i = 0; i< charsArray.length; i++) {
      combi.push(pre + charsArray[i]);
      f(pre + charsArray[i], charsArray.slice(i + 1));
    }
  }
  f("",charsArray);

  const result = combi.filter((x) => x.length == user_input_n)
  return (result) + "\n" + (result.length);
}

const arr = "A,B,C,D".split(",");
const user_input_n = 3;

console.log(combination(arr, user_input_n));