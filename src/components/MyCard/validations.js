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
    
    if(cep.length !== 8) errors.push(`${id}: O campo precisa ter 8 caracteres`)
    if(/\D/.test(cep)) errors.push(`${id}: O campo precisa conter apenas números`)
    if(cep === "00000000") errors.push(`${id}: O campo está inválido`)

    if(errors === []) return true

    return errors
}

const freteValidate = ({frete, id}) => {

    let errors = []

    if(frete.indexOf('.') !== -1) errors.push(`${id}: O campo não pode conter ponto (.)`)

    if(errors === []) return true

    return errors
}

export default validations