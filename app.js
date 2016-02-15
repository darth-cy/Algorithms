var Graph = require('./data-structures/graph').Graph;

var graph = new Graph();

graph.addVertice("V1", 7);
graph.addVertice("V2", 5);
graph.addVertice("V3", 15);
graph.addVertice("V4", 9);
graph.addVertice("V5", 3);
graph.addVertice("V6", 2);
graph.addVertice("V7", 4);
graph.addVertice("V8", 8);

graph.addEdge("V1", "V2", 2);
graph.addEdge("V1", "V3", 6);
graph.addEdge("V2", "V3", 3);
graph.addEdge("V2", "V5", 6);
graph.addEdge("V3", "V6", 3);
graph.addEdge("V4", "V1", 7);
graph.addEdge("V4", "V7", 4);
graph.addEdge("V6", "V8", 2);
graph.addEdge("V7", "V6", 1);

console.log(graph.dfs("V2", 12));
