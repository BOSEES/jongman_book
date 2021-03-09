const input = "10 5";

function sol(input) {
  const arr = input.split(" ");
  const foods = [];
  const nextEat = parseInt(arr[1], 10);
  let index = 0;
  for (let i = 1; i <= arr[0]; i++) {
    foods.push(i);
  }
//반복문이 돌때마다 먹은걸 제외한 새로운 배열을 받아야한다.
  while (foods.length > 2) {
    if (index > foods.length - 1) {
      index -= foods.length;
    }
    foods.splice(index,1);
    index += (nextEat - 1);
  }
  return foods
}

console.log(sol(input));