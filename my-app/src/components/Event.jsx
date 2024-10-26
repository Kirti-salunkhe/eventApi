import React, { useEffect, useState } from 'react'
import { useAuth } from '../security/AuthContext'
import { deleteEventApi, userEvents } from '../Api/UserApi'

export default function Event({selectedEvents,setSelectedEvents}) {
  const authContext = useAuth()
  const [events, setEvents] = useState()


  const getAllEvents = async () => {
    await userEvents().then(res => {
        setSelectedEvents(res.data)
    })
}

  useEffect(() => {
    getAllEvents()
}, [])

  const deleteEvent = async(id) => {
    await deleteEventApi(id).then(res=>{
        getAllEvents()
    })
  }

  

  console.log(events,selectedEvents)
  return (
    <>

      <div className='main'>
        <div className='header'>{selectedEvents ? <h2>Your Events</h2> : <h2>No events</h2>}</div>
        {
         selectedEvents && selectedEvents.map((e, index) => (
            <div key={index} className='card'>
              <div className='title'>
                <h4>{e.name}</h4>
                <h5 className='icon' onClick={()=>deleteEvent(e.id)}>-</h5>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
