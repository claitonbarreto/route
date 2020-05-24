const initialState = {
    frete: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FRETE':
            return {...state, frete: action.payload}
        default:
            return state
    }
}