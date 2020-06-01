const validations = (content, type) => {

    switch (type) {
        case 'cep':
            return cepValidate(content)
        case 'frete':
            return freteValidate(content)
        default:
            return null
    }
}

const cepValidate = (cep) => {
    
    if(cep.length !== 8) return  {text: "O Cep precisa conter 8 digitos!", code: 1}
    if(cep === "00000000") return  {text: "O Cep está inválido!", code: 2}

    return true
}

const freteValidate = (frete) => {
    if(frete.indexOf('.') !== -1) return {text: "A separação precisar ser com (,) - vírgola", code: 3}

    return true
}

export default validations