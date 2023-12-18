
function speeddetector(speed){
    //asign a constant variable to the speed limit and for the over speed which is 5km/s
    const limit = 70
    const over = 5
    if (speed <= limit){
        return "OK"
    }
    else{
        //create a constant to hold the demerit speed for when the driver over speeds
        const Demerit = (speed-limit)/over
        if(Demerit > 12 ){
            return "License suspended"
        }
        else{
            return `points: ${Demerit}`
        }
    }
}
//test case using console.log
console.log(speeddetector(131))













