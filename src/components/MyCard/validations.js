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

    if(errors === []) return true

    return errors
}

const freteValidate = ({frete, id}) => {

    let errors = []

    if(frete.indexOf('.') !== -1) errors.push(`O CAMPO ${id} NÃO PODE CONTER PONTO (.)`)

    if(errors === []) return true

    return errors
}

export default validations