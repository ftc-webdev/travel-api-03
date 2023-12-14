import { useContext } from 'react'

import { NotificationContext } from '../context/Notification'

const Notification = ({message}) => {
  return (
    <div className="message">{message.id} {message.text}</div>
  )
}
let counter = 1
const Notifications = () => {
  
  const { notifications, message } = useContext(NotificationContext)
    
  // window.onerror = (message, source, lineno, colno, error)
  window.addEventListener("error", ev => {
    // console.log("error", ev, ev.cancelable)
    message(`Error: ${ev.type} | ${ev.message}`)
    ev.stopImmediatePropagation() 
    ev.preventDefault()
  })

  window.addEventListener("unhandledrejection", ev => {
    // console.log("unhandledrejection", ev, ev.cancelable)
    message(`Error: ${ev.type} | ${ev.reason.message}`)
    ev.stopImmediatePropagation() 
    ev.preventDefault()
  })

  return (
    <>
      <div>Notifications</div>
      <ul>

        { notifications.map(msg => <Notification key={counter++} message={msg} /> )}
      </ul>
    </>
  )
}

export default Notifications