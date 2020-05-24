const validations = (content, type) => {

    switch (type) {
        case 'cep':
            return cepValidate(content)
        default:
            return null
    }
}

const cepValidate = (value) => {
    if(value.length !== 8) return "O Cep precisa conter 8 digitos!"
    if(value === "00000000") return "O Cep está inválido!"

    return true
}

export default validations