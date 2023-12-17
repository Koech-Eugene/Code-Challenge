function grade(marks){
    if(marks >= 79 && marks <= 100){
        return "A"
    }
    else if(marks >= 60 && marks <= 79){
        return "B"
    }
    else if(marks >= 49 && marks <= 59){
        return "C"
    }
    else if (marks >=0 && marks <= 39){
        return "E"
    }

    else {return "The input marks should be between 0 and 100"}

}
console.log(grade(0))