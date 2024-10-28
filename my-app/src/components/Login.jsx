import React, { useState } from 'react'
import { useAuth } from '../Security/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function Login() {
   const [loginData,setLoginData]=useState()
   const authContext=useAuth()
   const navigate=useNavigate()

   const onHandleChange=(e)=>{
        setLoginData({...loginData,[e.target.name]:e.target.value})
   }

   const onHandleSubmit=async(e)=>{
        e.preventDefault()
        await authContext.login(loginData).then((role)=>{
            role==="Admin" ? navigate("/admin") : navigate("/home")
        })
   }

    return (
        <>
        <div className='form-container'>  
            <div className='main'>
                <div className='form'>
                    <form>
                        <div className='form-control'>
                            <label>Email</label>
                            <input type="email" name="email" onChange={onHandleChange}></input>
                        </div>
                        <div className='form-control'>
                            <label>Password</label>
                            <input type="password" name="password" onChange={onHandleChange}></input>
                        </div>
                        <div className='button'>
                            <button type="submit" onClick={onHandleSubmit}>Login</button>
                        </div>

                    </form>
                </div>
            </div></div>
        </>
    )
}
