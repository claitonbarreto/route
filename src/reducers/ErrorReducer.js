const initialState = {
    error: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return {...state, error: [...state.error, action.payload]}
        default:
            return state
    }
}