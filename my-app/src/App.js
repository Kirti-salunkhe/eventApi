import React from 'react'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom'
import { createEventApi, getAllEventsApi } from './Api/EventApi'
import Home from './pages/Home'
import { AuthProvider, useAuth } from './security/AuthContext'
import './App.css'
import Admin from './components/Admin'
import MainNavigation from './components/MainNavigation'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const getAllEvents = async () => {
  let allEvents = []
  await getAllEventsApi().then(res => {
    allEvents = res.data
  })
  return allEvents
}

const PrivateRoute=({children})=>{
  const authContext=useAuth()

  if(authContext.isAuthenticated)
    return children

 return <Navigate to="/login"></Navigate>
}

const router = createBrowserRouter([
  {
    path: "/", element: <MainNavigation />, children: [
      { index:true, element: <Login />},
      { path: "/login", element: <Login /> },
      { path: "/home", element: <PrivateRoute><Home /></PrivateRoute>, loader: getAllEvents },
      { path: "/admin", element: <PrivateRoute><Admin /></PrivateRoute>, loader: getAllEvents }
    ]
  }

])

export default function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
    </>
  )
}
