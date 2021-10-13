let input = `2 3 5
3 5 9
1 7 8`;

input = input.split("\n").map((e) => e.split(" "));

function sol(animal) {
  let answer = "";
  let n = animal.length;

  for (let i = 0; i < n; i++) {
    let left = parseInt(animal[i][0]);
    let mid = parseInt(animal[i][1]);
    let right = parseInt(animal[i][2]);
    let count = 0;
    while(right - left > 2) {
      if ((mid - left) <= (right - mid)) {
        left = mid;
        mid = mid + 1
        count++;
      } else {
        console.log(mid)
        right = mid;
        mid = mid - 1;
        count++;
      }
    }
    answer += count + " ";
  }

  return answer;
}

console.log(sol(input));