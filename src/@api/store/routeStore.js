import apiConnection from '../apiConnection'

const routeStore = {
    getRoute: async (cep_origem, cep_destino) => {
        return await apiConnection.get(`route/${cep_origem}/${cep_destino}`)
    },

    getGeoCode: async () => {
        return await apiConnection.get('code/25265080000')
    }
}

export default routeStore;