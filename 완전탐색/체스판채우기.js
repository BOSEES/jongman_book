// let input = ["8 8",
//   "WBWBWBWB",
//   "BWBWBWBW",
//   "WBWBWBWB",
//   "BWBBBWBW",
//   "WBWBWBWB",
//   "BWBWBWBW",
//   "WBWBWBWB",
//   "BWBWBWBW"];

  let input = ["10 13",
    "BBBBBBBBWBWBW",
    "BBBBBBBBBWBWB",
    "BBBBBBBBWBWBW",
    "BBBBBBBBBWBWB",
    "BBBBBBBBWBWBW",
    "BBBBBBBBBWBWB",
    "BBBBBBBBWBWBW",
    "BBBBBBBBBWBWB",
    "WWWWWWWWWWBWB",
    "WWWWWWWWWWBWB"]


function sol(input) {
  let MN = input[0].split(" ");
  input.shift();
  let a1 = parseInt(MN[0]);
  let a2 = parseInt(MN[1]);

  let N = 8;
  let w = "WBWBWBWB";
  let b = "BWBWBWBW";
  let pivot1 = [w,b,w,b,w,b,w,b];
  let pivot2 = [b,w,b,w,b,w,b,w];
  let Min1 = 2600;
  let Min2 = 2600;
  
  
  for (let i = 0; i < a1 - N + 1; i++) {
    for(let j = 0; j <  a2 - N + 1; j++) {
      let count1 = 0;
      for(let k = 0; k < N; k++){
        for(let p = 0; p < N; p++){
          if (pivot1[k][p] !== input[i+k][j+p]){
            count1++;
          }
        }
      }
      Min1 = Math.min(Min1,count1);
    }
  }

  for (let i = 0; i < a1 - N + 1; i++) {
    for(let j = 0; j <  a2 - N + 1; j++) {
      let count2 = 0;
      for(let k = 0; k < N; k++){
        for(let p = 0; p < N; p++){
          if (pivot2[k][p] !== input[i+k][j+p]){
            count2++;
          }
        }
      }
      Min2 = Math.min(Min2,count2);
    }
  }
  
  return Math.min(Min1, Min2);
}

console.log(sol(input));