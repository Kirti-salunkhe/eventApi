import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { addEventApi } from '../Api/UserApi'
import { deleteEventApi, getAllEventsApi } from '../Api/EventApi';
import { useAuth } from '../Security/AuthContext';
import { toast } from 'react-toastify';

export default function Sidebar({setAllEvents=null}) {
    const [events,setEvents]=useState()
    const authContext=useAuth()
    let role=authContext.role

    useEffect(()=>{
        const getAllEvents = async () => {
           let res= await getAllEventsApi()
            setEvents(res.data)
          }
          getAllEvents()
    },[])

    const addEvent=async(eId)=>{
       let res=await addEventApi(eId)
       setAllEvents(res.data)
    }

    const deleteEvent=async(eId)=>{
      try{
        await deleteEventApi(eId)
        setEvents(events=>events.filter(e=>e.id!=eId))
      }  
      catch(err){
        console.log("hhh")
        toast.error("You can not delete this event")
      }

    }
 
  return (
  <>
    <div className="sidebar">
        {
            events && events.map((e,index)=>(
                <div className="card" key={index}>
                    <div className="title">
                        <h4>{e.name}</h4>
                        {(role!=="Admin") &&<h5 className="icon" onClick={()=>addEvent(e.id)}>+</h5>}
                        {(role==="Admin") && <div className="icon-delete" onClick={()=>deleteEvent(e.id)}><MdDelete /></div>}
                    </div>
                    <div className="info">
                        <div className="date">
                            <h5>Start Date:{e.startDate}</h5>
                            <h5>End Date:{e.endDate}</h5>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  </>
  )
}
