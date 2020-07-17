export default {
    setError(error) {
        return {type: 'SET_ERROR', payload: {error}}
    },
    clearError(id) {
        return {type: 'CLEAR_ERROR', payload: id}
    }
}