let input = 3;
// A = 시작
// B = 보조
// C = 목표
function hanoi(input,start,end, temp){
  if (input == 1) return console.log(start,end);

  hanoi(input - 1,start,temp,end);
  console.log(start, end);
  hanoi(input - 1,temp, end, start);
}
console.log(input);
hanoi(input,"1","3","2");
