import { createContext, useContext, useState } from "react"
import { loginApi } from "../Api/UserApi"
import { apiClient } from "../Api/ApiClient"
import { jwtDecode } from 'jwt-decode'
import axios from "axios"

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAunthenticated] = useState(false)
    const [role,setRole]=useState("")
   
    const login = async (loginData) => {
        const res = await loginApi(loginData)
     
        if (res.status === 200) {
          
            localStorage.setItem("token", res.data.jwtToken)
            let payload = jwtDecode(res.data.jwtToken)
        
        
            apiClient.interceptors.request.use(
                (config) => {
                    config.headers.Authorization = "bearer " + res.data.jwtToken
                    return config
                }
            )
            setIsAunthenticated(true)
            if (payload["roles"].includes("ROLE_ADMIN")) {
                //localStorage.setItem("role", "Admin")
                setRole("Admin")
                return "Admin"
            }
            else {
                //localStorage.setItem("role", "User")
                setRole("User")
                return "User"
            }
        }
        else {
            setIsAunthenticated(false)
            return null
        }
    }
    const logout=()=>{
        setIsAunthenticated(false)
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login ,logout,role}}>
            {children}
        </AuthContext.Provider>
    )
}

