let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  const result = [node.value];
  const queue = [];

  queue.push(node);
  while(queue.length > 0) {
    let pivot = queue.shift();

    for (let i = 0; i < pivot.children.length; i++) {
      queue.push(pivot.children[i]);
      result.push(pivot.children[i].value);
    }
  }
  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};

let root = new Node(1);
let rootChild1 = root.addChild(new Node(2));
let rootChild2 = root.addChild(new Node(3));
let leaf1 = rootChild1.addChild(new Node(4));
let leaf2 = rootChild1.addChild(new Node(5));
let output = bfs(root);
console.log(output); // --> [1, 2, 3, 4, 5]

// leaf1.addChild(new Node(6));
// rootChild2.addChild(new Node(7));
// output = bfs(root);
// console.log(output); // --> [1, 2, 3, 4, 5, 7, 6]