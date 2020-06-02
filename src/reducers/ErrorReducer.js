const initialState = {
    error: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ERROR':
            return {...state, error: [...state.error, action.payload]}
        case 'CLEAR_ERROR':
            return {...state, error: state.error.filter(value => {
                return !value.error[0].includes(action.payload)
            })}
        default:
            return state
    }
}