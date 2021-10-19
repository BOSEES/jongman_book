let input = `5
2 4 5 7 9`

input = input.split("\n").map((e) => {
  if (e.indexOf(" ") !== -1) return e.split(" ");
  else {
    return parseInt(e);
  }
})

function sol(data) {
  const n = data.shift();
  let array = data.shift().map((e) => parseInt(e));
  array.sort((a, b) => a - b);
  let answer = 0;

  function binary(array) {
    if (array.length <=1) return array;
    else {
      let left = [];
      let right = [];
      left.push(array.shift());
      right.push(array.shift());
      
      return left.concat(binary(array), right);
    }
  }

  array = binary(array);

  for (let i = 0; i < n - 1; i++) {
    let temp = Math.abs(array[i] - array[i + 1]);
    answer = Math.max(answer,temp);
  }
  return answer;
}

console.log(sol(input));