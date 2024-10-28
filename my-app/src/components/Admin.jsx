import React from 'react'
import Sidebar from './Sidebar'
import AddEvent from './AddEvent'

export default function Admin() {
    return (
        <>
            <div className="container">
                <Sidebar />
                <AddEvent />
            </div>
        </>
    )
}

