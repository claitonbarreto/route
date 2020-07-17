import apiConnection from '../apiConnection'

const routeStore = {
    getRoute: async (cep_origem, cep_destino) => {
        console.log(process.env.REACT_APP_API_URL)
        return await apiConnection.get(`route/${cep_origem}/${cep_destino}`)
    },

    getGeoCode: async () => {
        return await apiConnection.get('code/25265080000')
    }
}

export default routeStore;