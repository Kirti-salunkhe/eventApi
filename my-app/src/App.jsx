import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { getAllEventsApi } from './Api/EventApi'
import './App.css'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import Login from './components/Login'
import { AuthProvider, useAuth } from './Security/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Admin from './components/Admin'

export default function App() {


  const PrivateRoute=({children})=>{
    const authContext=useAuth()
    console.log(authContext.isAuthenticated)
    if(authContext.isAuthenticated)
      return children

    return <Navigate to="/login"></Navigate>
  }

  const router = createBrowserRouter([
    {
      path: "/", element: <MainNavigation></MainNavigation>, children: [
        { path: "/", element: <Login /> },
        { path: "/login", element: <Login></Login> },
        { path: "/home", element: <PrivateRoute><Home /></PrivateRoute>},
        { path: "/admin", element: <PrivateRoute><Admin /></PrivateRoute>}
      ]
    }

  ])

  return (
    <>
    <ToastContainer></ToastContainer>
      <AuthProvider>

        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  )
}
