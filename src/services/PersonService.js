import axios from 'axios'

const url_base = '/api/persons'
const getAll = () => {
    const request = axios.get(url_base)
    return request.then(res => res.data)
}
const create = object => {
    const request = axios.post(url_base, object)
    return request.then(res => res.data)
}
const update = (id,object) => {
    const request = axios.put(`${url_base}/${id}`, object)
    return request.then(res => res.data)
}

const deleteOne = id =>{
    const request = axios.delete(`${url_base}/${id}`)
    return request.then(res => res.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, create, deleteOne, update}