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
  this._root = options.root;
}

BinaryTree.prototype.inOrder = function(){
  var nodeStack = [];
  var root = this._root;
  var results = [];

  while(root){
    nodeStack.push(root);
    root = root._leftChild;
  }

  while(nodeStack.length > 0){
    var root = nodeStack.pop();
    results.push(root.value);

    while(root && root._rightChild){
      root = root._rightChild;

      while(root){
        nodeStack.push(root);
        root = root._leftChild;
      }
    }
  }

  return results;
}

DataStructure.BinaryTree = BinaryTree;
DataStructure.BinaryTreeNode = BinaryTreeNode;
module.exports = DataStructure;
