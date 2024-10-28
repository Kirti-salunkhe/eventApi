import { apiClient } from "./ApiClient"

export const userEventsApi=()=>apiClient.get("/user/event")
export const addEventApi=(eventId)=>apiClient.put(`/user/event/${eventId}`)
export const removeEventApi=(eventId)=>apiClient.delete(`/user/event/${eventId}`)