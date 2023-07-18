const fs = require("fs");

//Blocking
const result= fs.readFileSync("contacts.txt", "utf-8");
console.log(result);

console.log("now showing non- blocking")
//Non-Blocking
fs.readFile("contacts.txt", "utf-8",((err,result)=>{

    console.log(result);
}));


