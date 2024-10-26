import axios from 'axios'

const token=localStorage.getItem("token")
export const apiClient=axios.create({
    baseURL:"http://localhost:5000",
    headers:{
        Authorization:`bearer ${token}`
    }
})
