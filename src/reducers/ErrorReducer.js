const initialState = {
    errors: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ERROR':
            
            var localState = state.errors

            if(localState.indexOf(action.payload) == -1) {
                localState = [...localState, action.payload]
            }
            
            return {...state, errors: localState}
        case 'CLEAR_ERROR':

            const id = action.payload

            var localState = state.errors

            localState = localState.filter(error => {
                return error.indexOf(id) == -1
            })
            
            return {...state, errors: localState}
        default:
            return state
    }
}