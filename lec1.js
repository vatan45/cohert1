

// function starrypattern(numberofrows){
//     for( var i=1; i<=numberofrows; i++){
//         var stringtopoint = "";
//         for( var j=i*2; j>0; j--){
//             stringtopoint = stringtopoint + "*"
            
//         }
//         console.log(stringtopoint);

//     }
// }
// starrypattern(4);

const fs = require('fs');

function sum(n){
    let sum = 0;
    for (let i=0; i<n; i++){
        sum += n;

    }
    console.log(sum);
}

function fileIsRead(err, fileContent){
    sum(fileContent);

}

readFile("choclate.txt", 'utf8',fileIsRead);  

sum(100);

