import axios from 'axios'

const createInstance = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        withCredentials: true,
        timeout: 10000,
        responseType: 'json'
    })
    instance.interceptors.response.use(
        res => res.data,
        err => err
    )
    return instance
}

export default createInstance()
