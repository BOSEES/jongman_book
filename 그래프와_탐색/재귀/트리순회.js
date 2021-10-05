let input = `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`;

function traverseTree(input) {
  const spl = input.split(/\n/);
  const nodeCount = spl[0];
  const treeArr = spl.slice(1);
  const treeObj = {};
  treeArr.map((e) => {
    const elSpl = e.split(" ");
    treeObj[elSpl[0]] = elSpl.slice(1);
  })
  console.log(treeObj)
  function order(node, order) {
    const outArr = [];
  
    function orderRecursive(node,order) {
      
      const nodeLeft = treeObj[node][0];
      const nodeRight = treeObj[node][1];

      order == "pre" && outArr.push(node);
      if(nodeLeft != ".") {
          orderRecursive(nodeLeft, order)
      }
      order == "in" && outArr.push(node);
      if(nodeRight != ".") {
          orderRecursive(nodeRight, order)
      }
      order == "post" && outArr.push(node);
    }
    orderRecursive(node, order)
    return outArr.join("")
  }
  return order("A", "pre") + "\n" + order("A", "in") + "\n" + order("A", "post")
}
//ABDCEFG
//DBAECFG
//DBEGFCA


console.log(traverseTree(input));