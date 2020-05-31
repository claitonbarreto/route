import axios from 'axios'

const api = axios.create({
    baseURL: 'http://api.route'
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