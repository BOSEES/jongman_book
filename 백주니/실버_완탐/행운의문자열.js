let input = `abcdefghij`;


function sol(data) {
  const n = data.length;
  let ch = Array.from({length: n}, () => 0);
  let set = new Set();

  function DFS(str) {
    if (str.length >= n) {
      if (check(str)) {
        if (set.has(str)) {
          return
        } else {
          return set.add(str);
        }
      }
      else return;
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          DFS(str+data[i]);
          ch[i] = 0;
        }
      }
    }
  }

  DFS("");
  return set.size;
}

function check(string) {
  for (let i = 1; i < string.length - 1; i++) {
    const temp1 = string[i - 1];
    const temp2 = string[i];
    const temp3 = string[i + 1];
    if (temp1 === temp2 || temp2 === temp3) {
      return false;
    }
  }
  return true;
}

console.log(sol(input));