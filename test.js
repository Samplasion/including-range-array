const { range, random } = require("./index.js")
console.log(range(10).join(", ") + "\n");
console.log(range(12, 3).join(", ") + "\n");
console.log(random(12) + "\n");
console.log(random(10, 3) + "\n");