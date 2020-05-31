export default {
    setError(error, code) {
        return {type: 'SET_ERROR', payload: {error, code}}
    }
}