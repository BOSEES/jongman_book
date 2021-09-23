let str="found7, time: study; Yduts; emit, 7Dnuof";

function sol(s) {
  let result = "yes";
  let reg = /[^a-z]/g
  s = s.toUpperCase().replace(reg, "");
  console.log(s,"asdas");
  return result;;
}

sol(str);