function speedDetector(speed){
    const speedLimit = 70
    const overSpeed = 5
    if (speed <= 70){
        return "Ok"
    }
    else{
        const demerit = (speed - speedLimit)/overSpeed
        if (demerit > 12){
            return "License suspended."
        }else{
            return `points: ${demerit}`
        }
    }
}
console.log(speedDetector(80))