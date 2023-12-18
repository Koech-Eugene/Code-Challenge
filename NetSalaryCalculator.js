function salary(basicSalary, benefits){
    //write function to get the deductions
    //calculate the PAYE
    const payee = function (grossSalary){
        if(grossSalary <= 24000){
            return grossSalary * 0.1
        }
        else if(grossSalary > 24000 && grossSalary <= 32333){
            return grossSalary * 0.25
        }
        else if(grossSalary > 32333 && grossSalary <= 500000){
            return grossSalary * 0.3
        }
        else if(grossSalary > 500000 && grossSalary <= 800000){
            return grossSalary * 0.325
        }
        else{
            return grossSalary * 0.35
        }
    
    }
    //calcuate nhif
    //using 0.275 as a standard tax for nhif currently
    const nhif = function(grossSalary){
        return grossSalary * 0.275
    }

    //calculate nssf
    const nssf = function(grossSalary){
        if (grossSalary <= 18000 ){
            return grossSalary * 0.6 }
        else{
            return 0
        }

    }
    //calculate gross salaray
    grossSalary = basicSalary + benefits
    //call the deductions functions
    const PAYEE = payee(grossSalary)
    const NHIF_DEDUCTION = nhif(grossSalary)
    const NSSF_DEDUCTION = nssf(grossSalary)

    Deductions = PAYEE + NHIF_DEDUCTION + NSSF_DEDUCTION
    //calculate netsalary
    const netSalary = grossSalary - Deductions

    //return the results
    return{
        PAYEE:PAYEE,
        NHIF_DEDUCTION:NHIF_DEDUCTION,
        NSSF_DEDUCTION:NSSF_DEDUCTION,
        GROSS_SALARY:grossSalary,
        NET_SALARY:netSalary
    }
}

console.log(salary(100000, 20000))