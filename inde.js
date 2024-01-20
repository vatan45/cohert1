// var name = 'vatanmalik';
// var age = '19';
// var users = ["vatan", "raman", "rahul"];

// var user1 = {
//     name: "harkirat",
//     age: 20,
//     email: "vatanmalik04@gmsil.com",
//     phone: 54685546
// }



// var user1 = "harkirat";
// var age1= '20';

// var user2 = "vatan";
// var age2 = "19";

// console.log(name);


// console.log(users);
// console.log(user1)


// var users = ["harkirat", " singh", "raman"];
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);

// function printallusers(users){
//     for (var i = 0 ; i<users.length ; i++){
//         const tolog = users[i].name + "'s age is " + users[i].age;
//         console.log(tolog);

//     }
// }

// var users = [
//     {name: "harkirat", age: 20},
//     {name: "vatan", age: 19}
// ];



// printallusers(users);




// function sumAll (startindex, endindex){
//     var sum = 0;
//     for( var i = startindex; i <= endindex; i++){
//         sum= sum + i;

//     }
//     return sum;
// }

// var sum = sumAll (1, 1000);
// console.log(sum)




// for ( var i = 0; i<users.length ; i++){
//     const tolog = users[i].name + "'s age is " + users[i].age;
//     console.log(tolog);
// }

// function sum(index1, index2){
//     return index1 + index2;
// }

// function multiply(index1, index2){
//     return index1*index2;
// }

// function divide(index1, index2){
//     return index1/index2;

// }




// function doarithmatic(firstel, secondel, arthmaticfxn){
//    return arthmaticfxn(firstel, secondel)

// }

// var answer = doarithmatic(3,100,multiply);
// console.log(answer)

// function createpattern (numberofrows){
//     for(var i =0; i<numberofrows; i++){
//         var stringtoprint = "";

//         for(var j = 0; j<i+1; j++){
//             stringtoprint = stringtoprint + "*"
//         }
//         console.log(stringtoprint);
//     }
// }

// createpattern(10)


function starline(n){
    var answer = '';
    for(var i = 0; i<n; i++){
        answer = answer + "**";
    }
    console.log(answer)
}

function starrypattern(n){
    for(var i=0; i<=n; i++){
        starline(i);
    }
}




var answer = starrypattern(10)
console.log(answer);

var endTime = new Date().getTime();;