// function isAnagram(str1,str2){
//     if(str1.sort() == str2.sort()){
//         return true;
//     } else{
//         return false;
//     }

// }

// var ans = isAnagram("rasp", "pasr");
// console.log(ans)


// //how to sort a string in js


// "my name is vatan " => ["my", "name ", "is ", "vatan"]
// ["my", "name", "is ", "vatan"] => "my name is vatan"

// function arrayfromstring(str){
//     var array = str.split(" ");
//     return array;


// }
// var ans = arrayfromstring("my name is vatan")
// console.log(ans);

// dcba => ['d', 'c', 'b', 'a']
// function sort (str){
//     var array = str.split("")
//     array = array.sort();
//     var sortedstring = array.join("");
//     return sortedstring;
// }
// function isAnagram(str1, str2){
//     if (sort(str1) == sort(str2)){
//         return true;
//     } else {
//         return false;
//     }
// }

// var ans = isAnagram("hark", "arkh");
// console.log(ans);

function solve(transactions){
    var spendestimates = {};
    for(var i=0; i<transactions.length;i++){
        var  t= transactions[i];
        if(spendestimates[t.category]){
            spendestimates[t.category]= spendestimates[t.category] + t.price
        }else{
            spendestimates[t.category]= t.price
        }

    
    }
    console.log(spendestimates);
}










var transactions = [
    {
    itemname: "pepsi",
    category: "drink",
    price: 20,
    timestamp: 123123123
},
{
    itemname: "merinda",
    category: "drink",
    price: 30,
    timestamp: 123123123
},
{
    itemname: "samosa",
    category: "food",
    price: 5,
    timestamp: 123123123
}
]

solve(transactions)

// [
//     {
//         category: "drink",
//         spent: 45
//     },
//     {
//         category: "food",
//         spent: 5
//     }
// ]



