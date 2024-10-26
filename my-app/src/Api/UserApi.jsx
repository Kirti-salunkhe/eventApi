import axios from "axios";
import { apiClient } from "./ApiClient";


export const loginApi=(payload)=>axios.post('http://localhost:5000/login',payload)

//export const loginApi=(payload)=>apiClient.post('/login',payload)
export const addEventApi=(eventId)=>apiClient.put(`/user/event/${eventId}`)
export const userEvents=()=>apiClient.get(`/user/event`)
export const deleteEventApi=(eventId)=>apiClient.delete(`/user/event/${eventId}`)