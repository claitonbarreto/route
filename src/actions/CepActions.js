export default {
    setCep(cep, id){ 
        return {type: `SET_CEP_${id}`, payload: cep}
    }
}