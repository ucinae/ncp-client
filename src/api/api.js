import axios from 'axios'

const axiosTemplate = axios.create({
    baseURL: "http://localhost:8080"
})

const apiRequest = (method, url, request) => {
    const headers = {
        authorization: ""
    }

    return axiosTemplate({
        method,
        url,
        data: request,
        headers
    }).then(res => {
        return Promise.resolve(res.data)
    }).catch(err => {
        return Promise.reject(err)
    })
}

const get = (url, request) => apiRequest("get", url, request)

const del = (url, request) => apiRequest("delete", url, request)

const post = (url, request) => apiRequest("post", url, request)

const put = (url, request) => apiRequest("put", url, request)

const api = {
    get,
    delete: del,
    post,
    put
}

export default api