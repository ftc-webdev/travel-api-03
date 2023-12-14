import { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Button } from '../Form'

// import { UserContext } from './Context'
import User from './index'

const LoggedIn = () => {
  // console.log('user', User)
  const { user, onLogout } = useContext(User.Context)
  
  const doLogout = async () => {
    // throw new Error("An error")
    onLogout()

  }

  return (
    <>
      <span className="header-user">
        <span>Hello {user.userName}, Welcome back!!</span>
        <Button label="Logout" onClick={doLogout} />
      </span>
    </>
  )
}

export default LoggedIn