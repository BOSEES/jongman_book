let input = `5
aaaa
aaa
aa
aaaa
aaaaa`;

input = input.split("\n").map((e) => {
  if (isNaN(e)) return e;
  else return parseInt(e);
})

function sol(data) {
  const n = data.shift();
  let answer = 1;
  let tempArray = change(data[0]);
  const set = new Set(tempArray);
  for (let i = 1; i < n; i++) {
    if (!set.has(data[i])) {
      let temp = change(data[i]);
      for (let j = 0; j < temp.length; j++) {
        set.add(temp[j]);
      }
      answer++
    }
  }
  return answer;
}

function change(data) {
  let temp = [];
  for (let i = 0; i < data.length; i++) {
    let p1 = 0;
    let p2 = i;
    let str = "";
    while(data.length > str.length) {
      if (p2 === data.length) {
        str += data[p1];
        p1++;
      } else {
        str += data[p2];
        p2++;
      }
    }
    temp.push(str);
  }
  return temp;
}

console.log(sol(input))