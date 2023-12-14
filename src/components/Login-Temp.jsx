import { useState } from 'react'

const Login = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formfields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formfields;

  const handleChange = (event) => {
    console.log("onChange")
    const { name, value } = event.target;
    setFormFields({ ...formfields, [name]: value });
  };

  return (
    <>
      <label htmlFor="">Email</label>
      <input 
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <label htmlFor="">Password</label>
      <input type="text"
        name="password"
        value={password}
        onChange={handleChange}
      />
    
    </>
  )
}

export default Login
