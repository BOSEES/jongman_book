let input = [5,4,3,2,1];

function quick(data) {
  if (data.length <= 1) return data; 
  let left = [];
  let right = [];
  let pivot = data[0];

  for (let i = 1; i < data.length; i++) {
    if (pivot < data[i]) {
      right.push(data[i])
    } else {
      left.push(data[i]);
    }
  }

  return  quick(left).concat(pivot, quick(right));
}

console.log(quick(input))