const output2 = partTimeJob(4972);
console.log(output2); // --> 18

function partTimeJob(k) {
  // TODO: 여기에 코드를 작성하세요.
  let result = 0;
  const coins = [500,100,50,10,5,1];

  for (let i = 0; i < coins.length; i++) {
    result += parseInt(k / coins[i]);
    k = k % coins[i];
  }

  return result;
}