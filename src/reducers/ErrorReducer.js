const initialState = []

export default (state = initialState, action) => {
    switch (action) {
        case 'SET_ERROR':
            return {...state.push(action.payload)}
        default:
            return state
    }
}