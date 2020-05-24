const initialState = {
    cepOrigem: '',
    cepDestino: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CEP_ORIGEM':
            return {...state, cepOrigem: action.payload}
        case 'SET_CEP_DESTINO':
            return {...state, cepDestino: action.payload}
        default:
            return state
    }
}