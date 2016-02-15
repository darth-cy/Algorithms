if(typeof DataStructure == 'undefined'){
  DataStructure = {};
}

var Heap = require('./heap').Heap;

var Graph = function(){
  this._vertices = {};
  this._edges = {};
};

Graph.prototype.addVertice = function(id, val){
  this._vertices[id] = new GraphNode(id, val);
};

Graph.prototype.addEdge = function(id1, id2, weight){
  this._edges[String(id1 + "->" + id2)] = weight;
  this._vertices[id1].addChildren(this._vertices[id2]);
};

Graph.prototype.bfs = function(sourceId, val){
  var queue = [];
  var traversed = {};
  queue.push(this._vertices[sourceId]);

  while(queue.length > 0){
    var node = queue.shift();

    if(node._val == val){
      return node;
    }else{
      node._children.forEach(function(child){
        if(!traversed[child.id]){ queue.push(child); }
      });
    }

    traversed[node.id] = true;
  }
  return false;
};

Graph.prototype.dfs = function(sourceId, val){
  return this._vertices[sourceId].dfs(val, {});
};

var GraphNode = function(id, val){
  this.id = id;
  this._val = val;
  this._children = [];
};

GraphNode.prototype.value = function(){
  return this._val;
};

GraphNode.prototype.dfs = function(val, traversed){
  if(this._val == val){
    return this;
  }else{
    traversed[this.id] = true;
    for(var i = 0; i < this._children.length; i++){
      if(traversed[this._children[i].id]){ continue; }
      var result = this._children[i].dfs(val, traversed);
      if(result){ return result; }
    }
  }

  return false;
};

GraphNode.prototype.children = function(){
  return this._children;
};

GraphNode.prototype.addChildren = function(child){
  this._children.push(child);
};

DataStructure.Graph = Graph;
DataStructure.GraphNode = GraphNode;
module.exports = DataStructure;
