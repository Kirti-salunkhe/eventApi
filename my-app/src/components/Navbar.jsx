import React, { useEffect, useState } from 'react'
import { useAuth } from '../security/AuthContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const authContext = useAuth()

  return (
    <>
      <header>
        <nav>
          <h3>Event Management</h3>
       { (!authContext.isAuthenticated) ?<h5><Link to="/login">Login</Link></h5>:<h5><Link to="/login" onClick={()=>authContext.logout()}>Logout</Link></h5>}
        </nav>
      </header>
    </>
  )
}
