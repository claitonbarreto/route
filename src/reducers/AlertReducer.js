const initialState = {
   showAlert: false 
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SHOW_ALERT':
            return {...state, showAlert: action.payload}
        default:
            return state
    }
}