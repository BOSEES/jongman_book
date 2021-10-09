let input = [5,2,3,4,1];

function bubble(data) {
  for (let i = 0; i < data.length; i++){
    for (let j = 0; j < data.length - i; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

function selection(data) {
  for (let i = 0; i < data.length; i++) {
    let index = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[index] > data[j]) {
        index = j
      }
    }
    temp = data[i];
    data[i] = data[index];
    data[index] = temp;
  }

  return data;
}

//  5, 2, 3, 4, 1
function insertion(data) {
  for (let i = 1; i < data.length; i++) {
    let temp = data[i];
    for (let j = i - 1; j >= 0; j--) {
      if (data[j] > temp) {
        data[j + 1] = data[j];
        data[j] = temp;
      } else {
        break;
      }
    }
  }
  return data;
}

console.log(bubble(input));
console.log(selection(input));
console.log(insertion(input));