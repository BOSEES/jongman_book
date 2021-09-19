let input = "92 92 92 100 76";

function sol(array) {
  let copy = array.split(" ").map((e) => parseInt(e, 10));
  let result = [];

  for(let i = 0; i < copy.length; i++){
    let rank = 1;
    for(let j = 0; j < copy.length; j++){
      if(copy[i] < copy[j]) {
        rank++
      }
    }
    result.push(rank);
  }
  return result.join(" ");
}
console.log(sol(input));
