import { useContext, useState } from 'react'
import { Input, Button } from '../Form'
import { UserContext } from './Context'
import apis from '../../apis'
const { login } = apis.auth



const Login = () => {

  const { setUser, onLogin } = useContext(UserContext)
  
  const [ userEmail, setUserEmail ] = useState()
  const [ userPassword, setUserPassword ] = useState()

  const doLogin = async () => {
    const user = await login({ userEmail, userPassword })
    console.log("login", user)
    // test for success
    if(user) {
      setUser(user) // also make available on the context
      onLogin(user)
    }
  }

  return (
    <>
      <div className="container">
        <Input 
          label="Email" 
          placeholder="Enter your email address" 
          onChange={setUserEmail} 
          // value={userEmail}
        /> 
        <Input 
          label="Password" 
          placeholder="Enter your password"
          type="password" 
          onChange={setUserPassword} 
          // value={userPassword}
        /> 
        <Button label="Login" onClick={doLogin} />
  
      </div>    
    
    </>
  )

}

export default Login