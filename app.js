var DataStructure = require('./data-structures/linkedList.js');

var Node = DataStructure.LinkedListNode;
var node5 = new Node({ val: "a" });
var node4 = new Node({ val: "b" });
var node3 = new Node({ val: "c" });
var node2 = new Node({ val: "c" });
var node1 = new Node({ val: "b" });
var node0 = new Node({ val: "a" });

var linkedList = new DataStructure.LinkedList({ head: node0 });
linkedList.append(node1);
linkedList.append(node2);
linkedList.append(node3);
linkedList.append(node4);
linkedList.append(node5);


linkedList.print();
linkedList.removeAtIndex(-1);
linkedList.print();
linkedList.removeAtIndex(2);
linkedList.print();
