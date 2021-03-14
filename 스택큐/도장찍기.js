// 입력

// 도장 = [
// [1,1,1,2],
// [2,0,0,0],
// [1,1,1,1],
// [0,0,0,0]]

// 회전 = 1
//1회전 기준 90도


// 출력

// [[1, 2, 3, 3], [2, 1, 0, 1], [1, 2, 1, 2], [0, 1, 0, 2]]

const stemp = [
  [1,1,1,2],
  [2,0,0,0],
  [1,1,1,1],
  [0,0,0,0]]
const spin = 1;

function sol(stemp, spin) {
  let p = [];

  for(let i = 0; i < stemp.length; i++) {
    p.push(Array(4).fill(0));
  }

  p = sum_matrix(p, stemp);

  for (let i = 0; i < spin; i++) {
    stemp = rotate(stemp);
    p = sum_matrix(p,stemp);
  }

  return p;
}

function rotate(stemp) {
  let rot = [];
  for(let i = 0; i < stemp.length; i++) {
    rot.push(Array(4).fill(0));
  }

  for (let i = 0; i <stemp.length; i++) {
    for (let j = 0; j <stemp.length; j++) {
      rot[j][stemp.length - 1 - i] = stemp[i][j];
    }
  }
  return rot;
}

function sum_matrix(p, stemp) {
  for(let i = 0; i < p.length; i++) {
    for(let j = 0; j < p.length; j++) {
      p[i][j] += stemp[i][j];
    }
  }
  return p;
}


  console.log(sol(stemp, spin));