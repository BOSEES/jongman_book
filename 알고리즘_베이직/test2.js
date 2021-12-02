const printString = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve();
    }, Math.floor(Math.random() * 100) + 1)
  })
}

const printAll = () => {
  printString("A")
  .then(() => {
    return printString("B")
  })
  .then(() => {
    return printString("C");
  })
}

printAll();

function one() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve("one")}, 100)
  })
}
function two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve("two")}, 100)
  })
}
function three() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve("three")}, 100)
  })
}

const result = async () => {
  const one = await one();
  const two = await two();
  const three = await three();

  console.log(one);
  console.log(two);
  console.log(three);
}

result();
