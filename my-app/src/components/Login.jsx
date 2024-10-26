import React, { useContext, useState } from 'react'
import { loginApi } from '../Api/UserApi'
import { AuthContext, login, useAuth } from '../security/AuthContext'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate()
    const authContext = useAuth()
    const [error, setError] = useState("")

    const onHandleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()
     
        let role = await authContext.login(loginData)
        console.log(authContext)
        if (role != null) {
            console.log(authContext);
            role === "Admin" ? navigate("/admin") : navigate("/home")
        }
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
