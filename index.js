// const fs = require("fs");
// // const express  = require("express");
// function callbackfn(err, data){
//     console.log(data);

// }
// fs.readFile("a.txt", "utf-8",callbackfn);


const express = require("express");

var app = express()
const port = 3000
function calculatesum(counter){
    var sum =0;
    for(var i=0; i<counter;i++){
        sum = sum+i;
    }
    return sum;
}
var calculatedsum = calculatesum(100);
console.log(calculatedsum);
function handlefirstrequest(req, res){
    var calculatedsum = calculatesum(100);
    console.log(calculatedsum);
    var ans = "the sum is "+ calculatedsum;
    res.send(ans);
}
app.get('/', handlefirstrequest)
function started(){
    console.log('example app listening on port ${port}');
}

app.listen(port, started)







