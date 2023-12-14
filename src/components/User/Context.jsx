/* 
  see provider below for contents of context
  but it will contain the user object state variable and setUser
  it will also contain the lifecycle event hooks such as 
  onLogin, onLogout, onRegister
  these will be fired by individual "pages" when a user successfully log in/out or registers
  note each of the subsidiary components, plus the Context and the provider have all been attached
  to the User component
*/
import { useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'


const context = {
  user: null, 
  setUser: null, 
  getUserDetails: null, 
  onLogin: null, 
  onLogout: null, 
  onRegister: null
}
export const UserContext = createContext(context)

export const UserProvider = ({children}) => {
  const [ user , setUser ] = useState()
  const navigate = useNavigate()

  const getUserDetails = () => {
    const userDetails = localStorage.getItem("user")
    if(userDetails) setUser(JSON.parse(userDetails))
  }

  const onLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    setUser(user)
    navigate('/')
  }
  const onLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    navigate('/')
  }
  const onRegister = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    setUser(user)
    navigate('/')
  }
  const value = {
    user, setUser, getUserDetails, onLogin, onLogout, onRegister
  }

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )

}