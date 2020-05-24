import axios from 'axios'

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