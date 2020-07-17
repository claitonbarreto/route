import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const apiConnection =  {
    get: async (url) => {

        let result = {}
        let error = {}
        await api.get(url)
        .then(response => {
            result = response
        })
        .catch(err => error = err)

        return result;
    }
}

export default apiConnection;