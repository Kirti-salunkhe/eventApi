import React, { useState } from 'react'
import Sidebar from './Sidebar'
import AddEvent from './AddEvent'

export default function Admin() {
    const [selectedEvents,setSelectedEvents]=useState([])

    return (
        <>
            <div className='container'>
                <Sidebar />
                <AddEvent/>
            </div>
        </>
    )
}
