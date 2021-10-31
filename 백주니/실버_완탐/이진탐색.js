const matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

const target = 3;

function searchMatrix(matrix, target) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    if (binarySearch(matrix[i],target)) {
      return true
    }
  }
  return false;
} 

function binarySearch(array, target) {
  const n = array.length;
  const pivot = array[parseInt(n / 2)];
  if (target === pivot) return true;
  if (array.length <= 1) {
      return false;
  } else {
    if (target < pivot) {
      return binarySearch(array.slice(0,parseInt(n / 2)), target);
    } else {
      return binarySearch(array.slice(parseInt(n / 2) + 1), target);
    }
  }
}

console.log(searchMatrix(matrix,target))