if(typeof DataStructure == "undefined"){
  var DataStructure = {};
}

var LinkedListNode = function(options){
  this.val = options.val;
  this.next = options.next;
};

LinkedListNode.prototype.toString = function(){
  return "{ value: " + this.val + "; next: " + (this.next? "[node]": "NULL") + "}";
}

var LinkedList = function(options){
  this.head = options.head;

  // Find last
  var node = this.head;
  while(node.next){
    node = node.next;
  }
  this.last = node;
}

LinkedList.prototype.reverse = function(){
  if(!this.head || !this.head.next){
    return this;
  }

  var current = this.head;
  var pre = null;
  var post = null;

  while(current){
    post = current.next;
    current.next = pre;
    pre = current;
    current = post;
  }

  this.head = pre;
  return this;
}

LinkedList.prototype.append = function(newNode){
  this.last.next = newNode;
  this.last = newNode;
}

LinkedList.prototype.print = function(){
  var node = this.head;
  var result = "";

  while(node){
    result += node.toString();
    node = node.next;
    if(node){ result += " => "; }
  }

  console.log(result);

  return 0;
}

DataStructure.LinkedListNode = LinkedListNode;
DataStructure.LinkedList = LinkedList;

module.exports = DataStructure;
