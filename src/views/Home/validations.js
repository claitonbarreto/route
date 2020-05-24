const validations = (content, type) => {

    switch (type) {
        case 'cep':
            return cepValidate(content)
        default:
            return null
    }
}

const cepValidate = (cep) => {
    
    if(cep.length !== 8) return  "O Cep precisa conter 8 digitos!"
    if(cep === "00000000") return  "O Cep está inválido!"

    return true
}

export default validations