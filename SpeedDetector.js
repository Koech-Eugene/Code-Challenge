
function speeddetector(speed){
    const limit = 70
    const over = 5
    if (speed <= limit){
        return "OK"
    }
    else{
        const Demerit = (speed-limit)/over
        if(Demerit > 12 ){
            return "License suspended"
        }
        else{
            return `points: ${Demerit}`
        }
    }
}
console.log(speeddetector(131))













