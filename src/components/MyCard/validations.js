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

const cepValidate = ({cep,id}) => {

    let errors = []
    
    if(cep.length !== 8) errors.push(`O CAMPO CEP ${id} PRECISA TER 8 CARACTERES`)
    if(cep === "00000000") errors.push(`O CAMPO CEP ${id} ESTÁ INVÁLIDO`)

    //console.log(errors)

    if(errors === []) return true

    return errors
}

const freteValidate = (frete) => {
    if(frete.indexOf('.') !== -1) return {text: "A separação precisar ser com (,) - vírgola", code: 3}

    return true
}

export default validations