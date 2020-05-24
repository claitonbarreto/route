import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const apiConnection = () => {


    const getUrl = (url) => {
        axios.get(url)
        .then(response => {
            return response
        })
        .catch(err => {return err})
    }

}

export default apiConnection;