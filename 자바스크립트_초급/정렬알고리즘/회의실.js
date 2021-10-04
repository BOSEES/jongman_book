let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
// let arr = [[3,3], [1,3],[2,3]]

function sol(data) {
  let result = 0;
  data.sort((a,b) => {
    if (a[1] < b[1]) return a[1] - b[1];
    else return a[0] - b[0]
  })

  let endTIme = 0;
  for (let i of data) {
    if (i[0] >= endTIme) {
      result++;
      endTIme = i[1];
    }
  }

  return result
}

console.log(sol(arr));