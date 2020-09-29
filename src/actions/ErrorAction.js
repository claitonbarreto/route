export default {
    setError(error) {
        return {type: 'SET_ERROR', payload: error}
    },
    clearErrors(id) {
        return {type: 'CLEAR_ERROR', payload: id}
    }
}