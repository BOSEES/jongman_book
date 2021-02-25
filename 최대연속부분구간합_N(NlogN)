let arr = [-7, 4, -3, 6, 3, -8, 3, 4];

function fastMaxSum(A, lo, hi) {
  if (lo == hi) return A[lo];

  let mid = (lo + hi) / 2;
  let left = 0;
  let right = 0;
  let sum = 0;

  for (let i = mid; i >= lo; i--) {
    sum += A[i];
    left = Math.max(left, sum);
  }

  sum = 0;

  for (let j = mid + 1; j <= hi; j++) {
    sum += A[j];
    right = Math.max(right, sum);
  }

  let single = Math.max(fastMaxSum(A, lo, mid), fastMaxSum(A, mid + 1, hi));

  return Math.max(left + right, single);
}
