import { useNavigate } from 'react-router-dom'
import { Button } from '../Form'

const LoggedOut = () => {

  // const { user, setUser, getUserDetails, onLogin, onLogout, onRegister } = useContext(UserContext)
  
  const navigate = useNavigate()

  const doLogin = async () => {
    console.log("login")
    navigate('/login')
  }

  const doRegister = async () => {
    console.log("register") // to navigate to the register page
    navigate("/register")
  }

  // this should appear perhaps inline in the header
  return (
    <>
      <span className="header-user"> 
        <Button label="Login" onClick={doLogin} />
        <Button label="Register" onClick={doRegister} />

      </span>
    </>
  )
}

export default LoggedOut