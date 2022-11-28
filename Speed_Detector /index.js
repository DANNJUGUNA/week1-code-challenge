
const prompt=require("prompt-sync")();
let speedInput=prompt("Enter speed:");

function getSpeed(){
    let speed=speedInput;
    if(speed>=0 && speed<=70){
        console.log('Ok');
    }
    else if(speed>70){
      points();   
    }
}
function points(){
    let speed=speedInput;
   let point=(speed-70)/5;
    if(point<13){
        console.log(`points:${point}`);
    }
    else if(point>=12){
        console.log(`points:${point}`);
        console.log('License suspended');
    }
    }
getSpeed();