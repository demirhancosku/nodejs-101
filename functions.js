'use strict';

// Function
let student = function(name,exam){

    if(exam > 50){
        console.log(name +': Succeed');
    }else{
        console.log(name +': Failed');
    }

}


console.log('\n');

student('Oğuzhan', 50);

student('Oğuz', 70);

student('Coşku', 90);


console.log('\n');