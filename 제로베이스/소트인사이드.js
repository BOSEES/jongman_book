let input = "2143";

function sol(data) {
  const n = data.length
  data = data.split("").map((e) => parseInt(e));

  for(let i = 1; i < n; i++) {
    let temp = data[i];
    for (let j = i - 1; j >= 0; j--) {
      if (data[j] < temp) {
        data[j + 1] = data[j];
        data[j] = temp;
      } else {
        break;
      }
    }
  }

  return data.join("");
}

console.log(sol(input))