import { apiClient } from "./ApiClient"




export const createEventApi=(payload)=> apiClient.post("/event",payload,)
export const getAllEventsApi=()=>apiClient.get("/event")
export const getEventByIdApi=(id)=>apiClient.get(`/event/${id}`)
export const updateEventApi=(id)=>apiClient.put(`/event?${id}`)
export const deleteByIdApi=(id)=>apiClient.delete(`/event?id=${id}`)