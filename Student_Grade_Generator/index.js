
let mark;
function grade(){
    //checking if the marks input is valid
    if (mark>=0 && mark<=100){
      //when marks is greater than 79 grade is A
        if(mark>79){
            console.log('A');
        }
        //when marks is greater than 59 and less than or equal to 79 grade is B
        else if(mark>59 && mark<=79){
            console.log("B")
        }
        //when marks is greater than 49 and less than or equal to 59 grade is B
        else if(mark>49 && mark<=59){
            console.log("C")
        }
        else if(mark>39 && mark<=49){
            console.log("D")
        }else{
            console.log('E')
        }
    }
    else{
        console.log("marks out of range")
    }
}
grade();