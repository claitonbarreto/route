import apiConnection from '../apiConnection'

const routeStore = {
    getRoute: async () => {
        return await apiConnection.get('route/25265080/25931686')
    },

    getGeoCode: async () => {
        return await apiConnection.get('code/25265080000')
    }
}

export default routeStore;