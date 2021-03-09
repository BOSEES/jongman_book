function makeStar(y, x, M) {
  if (M === 1) {
      arr[y][x] = '*'
  } else {
      let m = M / 3
      for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 3; l++) {
              if (k === 1 && l === 1) {
                  continue
              } else {
                  makeStar(y * M + k, x * M + l, m)
              }
          }
      }
  }
}


const N = 6

let arr = []
for (let i = 0; i < N; i++) {
  let smallArr = []
  for (let j = 0; j < N; j++) {
      smallArr.push(' ')
  }
  arr.push(smallArr)
}

makeStar(0, 0, N)

for (let i = 0; i < N; i++) {
  console.log(arr[i].join(''))
}