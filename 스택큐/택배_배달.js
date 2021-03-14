function solution(man, time){
  let result = 0;
  let mans = new Array(man).fill(0);

  while(time.length !== 0) {
    for (let i = 0; i < mans.length; i++) {
      if(mans[i] == 0 && time.length !== 0)
      mans[i] = time.shift();
    }
    mans = mans.map((e) => e -= 1);
    result++;
  }

  result += Math.max.apply(null, mans);
  return result
}

const 배달원 = 3;
const 배달시간 = [1,2,1,3,3,3];


console.log(solution(배달원, 배달시간));