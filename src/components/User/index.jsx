/*
  this component allows a user to login or register
  the user must provide an email and password - registered on the server
  the front end will save the user in the localstorage
  the app will auto login on load if the user is found
  if logged in the user name and logout button is displayed in the header
  if logged out, there will be register and login buttons in the header
  we will use context to share this info with the app
*/
import { useEffect, useContext } from 'react'

import { UserContext, UserProvider } from './Context'
import LoggedOut from './LoggedOut'
import LoggedIn from './LoggedIn'
import Register from './Register'
import Login from './Login'

/*
 top level component - render in header - it's the parent of all the user based components
 the context can be used by nay oter component by importing User and using the attached context
 
 import Users from './Users
 ...
 const { user, setUser, ...others } = useContext(User.Context)

*/
const User = () => {

  const { user, getUserDetails, onLogin, onLogout, onRegister } = useContext(UserContext)

  useEffect(() => {
    getUserDetails()  // load user details on load - if registered
  }, [])


  return (
    <>
      {user ? <LoggedIn user={user} onLogout={onLogout} /> : <LoggedOut onLogin={onLogin} onRegister={onRegister} />}
    </>    
  )
}
// don't forget to attach the provider to the primary component
User.Provider = UserProvider
User.Context = UserContext

// the header components
User.LoggedOut = LoggedOut

User.LoggedIn = LoggedIn

/*
  this is a page component - ie not header - and is rendered in a contain
*/
User.Register = Register

User.Login = Login

export default User