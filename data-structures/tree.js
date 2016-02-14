if(typeof DataStructure == 'undefined'){
  DataStructure = {};
}

var BinaryTreeNode = function(options){
  this.value = options.value;

  this._parent = options.parent;
  this._leftChild = options.leftChild;
  this._rightChild = options.rightChild;
};

BinaryTreeNode.prototype.set = function(newVal){
  this.value = newVal;
};

BinaryTreeNode.prototype.insertLeft = function(node){
  this._leftChild = node;
};

BinaryTreeNode.prototype.insertRight = function(node){
  this._rightChild = node;
};

BinaryTreeNode.prototype.isLeaf = function(){
  return !this._leftChild && !this._rightChild;
}

var BinaryTree = function(options){
  this._root = new DataStructure.BinaryTreeNode();
}

DataStructure.BinaryTree = BinaryTree;
DataStructure.BinaryTreeNode = BinaryTreeNode;
module.exports = DataStructure;
