//이진 트리구조: 1개의 부모 노드가 2개 이하의 자식 노드를 가지고있는 트리 형태의 구조.
let ar = [1,2,3,4,5,6,7];
function solution(ar, target) {
  let left = 0;
  let right = ar.length - 1;
  let idx = BsearchRecusion(ar,target,left,right);
  if (idx == -1) return "탐색 실패...";
  else {
    return idx;
  }
}

function BsearchRecusion(arr, target, left, right) {
  let mid;
  if (left > right) return -1;
  else {
    mid = (left + right) / 2 ;
    if (arr[mid] == target) {
      return mid
    } else if (arr[mid] < target) {
      return BsearchRecusion(arr,target,mid + 1, right);
    } else {
      return BsearchRecusion(arr,target,left, mid - 1);
    }
  }
}

console.log(solution(ar, 6));