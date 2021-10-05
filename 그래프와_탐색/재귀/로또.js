  let input = [7,1,2,3,4,5,6,7];
  let k = input.shift();
  let ar = [];
  function sol(arr, selectNumber) {
    let result = [];
    if (selectNumber === 1) return arr.map((value) => [value]);
    
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = sol(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      result.push(...attached);
    })
    return result;
  }
  
  sol(input, 6);
  // console.log(ar.map((e) => console.log(e.join(" "))))

