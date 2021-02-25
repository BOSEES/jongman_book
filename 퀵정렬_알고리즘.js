//퀵 정렬 구현하기

function quickSort(A) {
  if (A.length <= 1) return A;

  const mid = A[0];
  const right = [];
  const left = [];

  for (let i = 1; i < A.length; i++) {
    if (A[i] > mid) {
      right.push(A[i]);
    } else {
      left.push(A[i]);
    }
  }

  return quickSort(left).concat(mid, quickSort(right));
}

const arr = [1, 3, 2, 7, 5, 6, 4, 8, 9, 10];
console.log(quickSort(arr));
