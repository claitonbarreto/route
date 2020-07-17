const initialState = {
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ROUTE':
            return {...state, data: action.payload}
        default:
            return state
    }
}