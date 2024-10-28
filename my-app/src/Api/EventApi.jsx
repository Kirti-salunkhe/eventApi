import { apiClient } from "./ApiClient";

export const getAllEventsApi=()=>apiClient.get("/event")
export const addNewEventApi=(payload)=>apiClient.post("/event",payload)
export const deleteEventApi=(eventId)=>apiClient.delete(`/event?id=${eventId}`)