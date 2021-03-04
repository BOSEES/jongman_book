let input = [1,4,5,5,3,1];

function sol(input) {
  let left = 1;
  let right = 1;
  let leftCount = 0;
  let rightCount = input.length - 1;

  for (let i = 1; i <= input.length; i++){
    if (input[leftCount] < input[i]) {
      left++;
      leftCount++
    }
  }

  for (let i = input.length - 2; i > 0; i--){
    if (input[rightCount] < input[i]) {
      right++;
      rightCount--;
    }
    
  }
  console.log(left);
  console.log(right);
}

sol(input);