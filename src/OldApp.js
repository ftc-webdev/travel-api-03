import './App.css';
import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'

import { NotificationContext }  from './context/Notification'
import Notifications from './components/Notifications'

// pages
import Home from './pages/Home'
import Flights  from './pages/Flights'
import Booking  from './pages/Booking'
import PastBookings from './pages/PastBookings'
import ChildrenPage from './pages/ChildrenPage'

import NotFound  from './pages/NotFound'

import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

import User from './components/User'

console.log("Context", NotificationContext)

const App = () => {

  const { notifications } = useContext(NotificationContext)
  
  return (
    <>
      <User.Provider>
        <div className="App">
          <header className="App-header">
            Airline Travel API Portal
            <User />        
          </header>

          <main className="xcontainer">

            <NavBar />

            <div className="row">

              <div className="sidebar column">
                <SideBar>
                  <div>This is a child "component"</div>
                  <div>This is another child entry</div>
                </SideBar>
              </div>

              <div className="canvas column">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/flights" element={<Flights />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/past-bookings" element={<PastBookings />} />
                  <Route path="/children" element={<ChildrenPage />} />

                  <Route path="/register" element={<User.Register />} />
                  
                  <Route path="/*" element={<NotFound />} />
                </Routes>
              </div>
            </div>

            <Notifications messages={notifications} />

          </main>

        </div>
      </User.Provider>
    </>

  )
}

export default App;
