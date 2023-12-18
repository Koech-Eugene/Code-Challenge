//using the if..else statement checks what a student has gotten an assigns a grade to i
function grade(marks){
    if(marks >= 80 && marks <= 100){
        return "A"
    }
    else if(marks >= 60 && marks <= 79){
        return "B"
    }
    else if(marks >= 49 && marks <= 59){
        return "C"
    }    
    else if(marks >= 40 && marks <= 48){
        return "D"
    }
    else if (marks >=0 && marks <= 39){
        return "E"
    }
    //marks should be within the range of 0-100
    else {return "The input marks should be between 0 and 100"}

}
//test case using console.log
console.log(grade(0))