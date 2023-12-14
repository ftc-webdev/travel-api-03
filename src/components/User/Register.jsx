import { useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { Input, Button } from '../Form'
import { UserContext } from './Context'
import apis from '../../apis'
const { auth } = apis

const Register = () => {

  const { setUser, onRegister } = useContext(UserContext)

  const [ userName, setUserName ] = useState('')
  const [ userEmail, setUserEmail ] = useState('')
  const [ userPassword, setUserPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')
  
  const doRegister = async () => {
    const data = {
      userName, userEmail, userPassword, confirmPassword
    }
    const user = await auth.register(data)
    console.log("register", user)
    // check for success
    setUser(user)
    onRegister(user)
  }

  return (
    <>
      <div className="container"> 
        <Input 
          name="name"
          label="Name" 
          placeholder="Enter your name" 
          onChange={setUserName} 
          value={userName}
        /> 
        <Input 
          name="email"
          label="Email" 
          placeholder="Enter your email address" 
          onChange={setUserEmail} 
          value={userEmail}
        /> 
        <Input 
          label="Password" 
          placeholder="Enter your password"
          type="password" 
          onChange={setUserPassword} 
          value={userPassword}
        /> 
        <Input 
          label="Confirm Password" 
          placeholder="Confirm your password"
          type="password" 
          onChange={setConfirmPassword} 
          value={confirmPassword}
        /> 
        <Button label="Register" onClick={doRegister} />

      </div>
    </>
  )
}

export default Register