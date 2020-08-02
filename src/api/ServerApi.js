import api from './api'

export const getServerImageProductList = async (request) => {
    try {
        const response = await api.post("/serverImageProduct", request)
        return response
    } catch (error) {
        console.error(error)
    }
}