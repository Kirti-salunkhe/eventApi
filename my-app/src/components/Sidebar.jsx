import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { addEventApi, deleteEventApi, userEvents } from '../Api/UserApi'
import { useAuth } from '../security/AuthContext'
import { MdDelete } from "react-icons/md";
import { deleteByIdApi } from '../Api/EventApi';
import { toast } from 'react-toastify';

export default function Sidebar({setSelectedEvents=null}) {
    const allEvents = useLoaderData()
    const [events, setEvents] = useState(allEvents)
    const authContext=useAuth()
    const role=authContext.role

    const addEvent = async (eventId) => {
        await addEventApi(eventId).then(res=>{
            setSelectedEvents(res.data)
        })
    }

    const deleteEvent=async(eventId)=>{
        await deleteByIdApi(eventId).then(res=>{
            console.log(events.filter(e=>e.id!=eventId))
            setEvents(events=>events.filter(e=>e.id!=eventId))
        }).catch(err=>toast.error("You can't delete this event"))
    }


    return (
        <>
            <div className='sidebar'>
                {
                    events && events.map((e, index) => (
                        <div key={index} className='card'>
                            <div className='title'>
                                <h4>{e.name}</h4>
                               { role!="Admin" && <h5 className='icon' onClick={() => addEvent(e.id)}>+</h5>}
                               {role=="Admin" && <div className='icon-delete' onClick={()=>deleteEvent(e.id)}><MdDelete /></div>}
                            </div>
                            <div className='info'>
                                <div className='date'>
                                    <h5>Start Date:{e.startDate}</h5>
                                    <h5>End Date:{e.endDate}</h5>
                                </div>
                                <h5>Fee:{e.fee}</h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
