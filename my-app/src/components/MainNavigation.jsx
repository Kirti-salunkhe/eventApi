import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../Security/AuthContext'

export default function MainNavigation() {
  return (
   <>
   <AuthProvider>
  
   <Outlet></Outlet>
   </AuthProvider>
   
   </>
  )
}
