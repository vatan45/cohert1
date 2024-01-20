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
function sort (str){
    var array = str.split("")
    array = array.sort();
    var sortedstring = array.join("");
    return sortedstring;
}
function isAnagram(str1, str2){
    if (sort(str1) == sort(str2)){
        return true;
    } else {
        return false;
    }
}

var ans = isAnagram("hark", "arkh");
console.log(ans);