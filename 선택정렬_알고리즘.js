//선택 정렬
const arr = [1, 3, 2, 7, 5, 6, 4, 8, 9, 10];
function selectSort(A) {

  for (let i = 0; i < A.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < A.length; j++) {
      if(A[minIndex] > A[j]) {
        minIndex = j;
      } 
    }

    if(minIndex !== i) {
      let swap = A[minIndex];
      A[minIndex] = A[i];
      A[i] = swap;
    }
  }

  return A;
}
console.log(selectSort(arr))
