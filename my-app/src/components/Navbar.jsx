import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext, useAuth } from '../Security/AuthContext'

export default function Navbar() {
    const authContext=useContext(AuthContext)
console.log(authContext)
  return (
    <>
        <header>
            <nav>
                <h3>Event Management</h3>
               { !authContext.isAuthenticated ? <h5><Link to="/login">Login</Link></h5> : 
               <h5><Link to="/login" onClick={()=>authContext.logout()}>Logout</Link></h5>}
            </nav>
        </header>
    </>
  )
}
