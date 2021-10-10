let input = [1,2,3,4,5];

function sol(data) {
  let left = 1;
  let right = 1;
  let n = data.length;
  
  let view1 = data[0];
  let view2 = data[n - 1];

  //left
  for (let i = 1; i < n; i++) {
    if (view1 < data[i]) {
      view1 = data[i];
      left++;
    }
  }

  //right
  for (let i = n - 2; i >= 0; i--) {
    if (view2 < data[i]) {
      view2 = data[i];
      right++;
    }
  } 
  return `${left}${"\n"}${right}`
}

console.log(sol(input));