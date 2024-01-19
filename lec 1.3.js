// // let filecontent = readfile("./choclate.txt");
// // console.log("hi there");

// const { log } = require("console");



// // readFile("./choclate.txt", function(contents){
// //     console.log(contents);
// // })

// function printtoscreen(){
//     console.log("hello world");
// }
// setTimeout(printtoscreen, 1*1000);


// let counter =0;
// for(let i =0; i<1000; i++){
//     counter = counter +1;
    
// }
// console.log(counter);



function medicine1get(){
    return new Promise(function(resolve){
        setTimeout(resolve, 1000);
    })
}

medicine1get().then(function(){
    console.log("medicine 1 recived");
})