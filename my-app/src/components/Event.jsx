import React, { useEffect } from 'react'
import { removeEventApi, userEventsApi } from '../Api/UserApi'

export default function Event({allEvents, setAllEvents}) {
 
    const getAllEvent=async()=>{
        const res= await userEventsApi()
        setAllEvents(res.data)
      }

    useEffect(()=>{
        getAllEvent()
    },[])

    const deleteEvent=async(eId)=>{
       await removeEventApi(eId)
        getAllEvent()
    }

  return (
    <>
        <div className="main">
            <div className="header">{allEvents ? <h2>Your Events</h2>:<h2>No Events</h2>}</div>
            {
                allEvents && allEvents.map((e,index)=>(
                    <div className="card" key={index}>
                        <div className="title">
                            <h4>{e.name}</h4>
                            <h5 className="icon" onClick={()=>deleteEvent(e.id)}>-</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

