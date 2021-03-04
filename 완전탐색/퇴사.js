let input = ["7","3 10","5 20","1 10","1 20","2 15","4 40","2 200"];

function sol(input) {
  let end = parseInt(input.shift(), 10) + 1;
  let schedule = input.map((e) => e.split(" "));

  for (let i = 0; i < schedule.length; i++) {
    let day = 0;
    let money = 0;
    let count = 0
    let n = 0;
    // console.log(parseInt(schedule[count][0]));
    for(let j = 0; j < schedule.length; j++) {

      day += parseInt(schedule[n][0]);
      count = day;
      if (day > end) {
        break;
      }
      
      console.log(count)
    }
    
  }s
  
}

sol(input)