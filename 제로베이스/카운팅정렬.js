let input = [5,2,3,1,4,2,3,5,1,7];

function countingSort(data) {
  let answer = ""
  let tempArray = Array.from({length: 10001}, () => 0);

  for(let i = 0; i < data.length; i++) {
    tempArray[data[i]] += 1;
  }

  for (let i = 1; i < tempArray.length; i++) {
    if (tempArray[i] !== 0) {
      for (let j = 0; j < tempArray[i]; j++) {
        answer += i;
      }
    }
  }
  return answer;
}

console.log(countingSort(input))