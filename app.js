var Schedule = require("./greedy/gridScheduling");

console.log(Schedule.schedule([
  {
    id: "Meeting with CEO",
    gridSize: 2,
    profit: 100
  },{
    id: "Complete the website",
    gridSize: 3,
    profit: 90
  },{
    id: "Have fun with colleagues",
    gridSize: 1,
    profit: 10
  },{
    id: "Go Rock climbing",
    gridSize: 1,
    profit: 30
  },{
    id: "Press Conference",
    gridSize: 1,
    profit: 120
  },{
    id: "Help supervisor",
    gridSize: 2,
    profit: 50
  }
], 9));
