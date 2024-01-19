
var counter =1;
var counter2 = 1;

function printcounter(){
    console.clear();
    console.log(counter);
    counter = counter +1;
}

setInterval(printcounter, 1000)


for(var i=0; i<10000; i++){
    counter2 = counter2+1;

}
console.log(counter2);