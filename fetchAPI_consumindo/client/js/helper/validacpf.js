function isInvalidCPF(cpf){
    const cpfInvalid = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "00000000000"
    ]

    return cpfInvalid.indexOf(cpf) === -1
}

function sumCPF(cpf,totalDigits,peso){
    let soma = 0;
    for( let index = 1; index <= totalDigits; index++ ){
        soma+= parseInt(cpf.substring(index - 1,index)) * (peso - index);
    }
    return soma    
}
function validateDigit(cpf,totalDigits,peso,digit){
    const soma = sumCPF(cpf,totalDigits,peso);
    const resto = (soma *10 ) % 11;

    return resto === digit;
}

function validateFistDigit(cpf){
    const peso = 11;
    const totalDigit= 9;
    const digit =  parseInt(cpf.substring(9,10));

    return validateDigit(cpf,totalDigit,peso,digit);
}

function valideSecondDigit(cpf){
    const peso = 12;
    const totalDigit= 10;
    const digit =  parseInt(cpf.substring(10,11));

    return validateDigit(cpf,totalDigit,peso,digit);
}

function validateCF(cpf){
    return(
        isInvalidCPF(cpf) &&
        validateFistDigit(cpf) &&
        valideSecondDigit(cpf)
    )
}