import { NotificationContext } from '../context/Notification'
import { useContext, useEffect } from 'react'
// import Login from '../components/Login'
const Home = () => {
  
  const { message } = useContext(NotificationContext)
  useEffect(() => {
    message("Hello from Home!!")
  }, [])

  return (
    <>
      <div>Home</div>
      {/* <Login /> */}
    </>
  )
}

export default Home