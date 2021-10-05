const input = "1723";
const combi = [];

function sol(input) {
  const arrN = input.split("");
  const n = 2;
  return combination("", arrN);
}

function combination(pre, arrNum) {
  for (let i = 0; i < arrNum.length; i++) {
    combi.push(pre + arrNum[i]);
    combination(pre + arrNum[i], arrNum.slice(i + 1));
  }

  const result = combi.filter((x) => x.length == 2);
  return Math.max.apply(null, result);
}



console.log(sol(input));


