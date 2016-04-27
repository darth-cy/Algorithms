var BinaryTree = require('./data-structures/tree.js').BinaryTree;
var Node = require('./data-structures/tree.js').BinaryTreeNode;



var node5 = new Node({ value: 5 });
var node3 = new Node({ value: 3, rightChild: node5 });
var node2 = new Node({ value: 2, leftChild: node3 });
var node1 = new Node({ value: 1 });
var node0 = new Node({ value: 0, leftChild: node1, rightChild: node2 });
var tree = new BinaryTree({ root: node0 });

//    0
//  1   2
//    3
//      5

console.log(tree.inOrder());
