// this is where we declare/define the context
import { useState, createContext } from 'react'

export const NotificationContext = createContext()


let msgId = 1
const ids = []
let busy = false  

export const NotificationProvider = ({ children }) => {

  const [ notifications, setNotifications ] = useState([])
  const delay = 4000
  const timedDelete = (_msg) => {
    ids.push(_msg.id)
    // how to make this non-re-entrant ie don't run of already running
    setTimeout(() => {
      if(busy) {  // setTimeout already running
        console.log("delete setTimeout already running")
      }
      busy = true
      const id = ids.pop()
      // console.log("deleting ", id)
      setNotifications( notifications.filter(msg => msg.id !== id))
      busy = false
      // console.log("msgs", notifications)
    }, delay)
  }
  
  const message = (msg) => {
    const _msg = {
      text: msg
    }
    _msg.id = msgId++
    if(busy) {
      console.log("message : setTimeout running")
    }
    setNotifications([...notifications, _msg])
    timedDelete( _msg )  // delete the msg in a while 
  }
  const value = {
    notifications,
    message,
  }
  return (
    <NotificationContext.Provider value={value} >
      { children }
    </NotificationContext.Provider>  
  )
}