import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Event from '../components/Event'
import Navbar from '../components/Navbar'

export default function Home() {
   const [allEvents,setAllEvents]=useState()

  return (
   <>
   <Navbar></Navbar>
    <div className="container">
      <Sidebar setAllEvents={setAllEvents}/>
      <Event allEvents={allEvents} setAllEvents={setAllEvents}/>
    </div>
   </>
  )
}
