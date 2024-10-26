import React, { useEffect, useState } from 'react'
import Event from './Event'
import { userEvents } from '../Api/UserApi'
import Sidebar from './Sidebar'

export default function Main() {
  const [selectedEvents,setSelectedEvents]=useState([])

 

console.log(selectedEvents)
  return (
    <div className='container'>
      <Sidebar setSelectedEvents={setSelectedEvents}/>
      <Event selectedEvents={selectedEvents} setSelectedEvents={setSelectedEvents}/>
    </div>
  )
}
