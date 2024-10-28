import axios from "axios"
import { createContext, useContext, useState } from "react"
import { apiClient } from "../Api/ApiClient"
import { toast } from "react-toastify"
import { jwtDecode } from "jwt-decode"

export const AuthContext=createContext()
export const useAuth=()=>useContext(AuthContext)

export const AuthProvider=({children})=>{

   const [isAuthenticated,setIsAuthenticated]=useState(false)
   const [role,setRole]=useState("")

//    const login=async(loginData)=>{
//        const res = await axios.post("http://localhost:5000/login",loginData)
//        if(res.status===200){
           
//             localStorage.setItem("jwtToken",res.data.jwtToken)
//             apiClient.interceptors.request.use(
//                 (config) => {
//                     config.headers.Authorization = "bearer " + res.data.jwtToken
//                     return config
//                 }
//             )
//             setIsAuthenticated(true)
//             return true
//        }
//        return false
//    }

   const logout=()=>{
    setIsAuthenticated(false)
    localStorage.removeItem("token")
   }

    const login=async(loginData)=>{
        try{
            const res= await axios.post("http://localhost:5000/login",loginData)
            if(res.status===200){
              localStorage.setItem("token",res.data.jwtToken)
              let payload=jwtDecode(res.data.jwtToken)
              console.log(payload)
              setIsAuthenticated(true)
             

              apiClient.interceptors.request.use((req)=>{
                  req.headers.Authorization=`bearer ${res.data.jwtToken}`
                  return req
              })

              if(payload["roles"].includes("ROLE_ADMIN"))
              {
                setRole("Admin")
                return "Admin"
              }
              return "User"
            }
        }
        catch(err){
            toast.error("Invalid Credentials")
        }
     
    }

    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout,role}}>
            {children}
        </AuthContext.Provider>
    )
}