var DataStructure = require('./data-structures/linkedList.js');

var Node = DataStructure.LinkedListNode;
var node5 = new Node({ val: 5 });
var node4 = new Node({ val: 30 });
var node3 = new Node({ val: 4 });
var node2 = new Node({ val: 30 });
var node1 = new Node({ val: 198 });
var node0 = new Node({ val: 99 });

var linkedList = new DataStructure.LinkedList({ head: node0 });
linkedList.append(node1);
linkedList.append(node2);
linkedList.append(node3);
linkedList.append(node4);
linkedList.append(node5);

linkedList.print();

linkedList.reverse();
linkedList.print();
