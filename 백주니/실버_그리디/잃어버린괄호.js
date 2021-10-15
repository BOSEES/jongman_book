let input = `53+7-30+5+30-10+3`;

function sol(data) {
  data = data.split("-");

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === "+") {
        let temp = data[i].split("+")
        let sum = 0;
        for (let k = 0; k < temp.length; k++) {
          sum += parseInt(temp[k]);
        }
        data[i] = sum;
      }
    }
    data[i] = parseInt(data[i]);
  }

  let answer = data[0];

  for (let i = 1; i < data.length; i++) {
    answer -= data[i];
  }

  return answer;
}


console.log(sol(input));