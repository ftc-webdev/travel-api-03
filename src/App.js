import './App.css';
import { useContext } from 'react'

import { NotificationContext }  from './context/Notification'
import Notifications from './components/Notifications'

import User from './components/User'
import Pages from './pages' // load index.jsx
import { init } from './utils'

const App = () => {

  const { notifications, message } = useContext(NotificationContext)
  
  init(message) // pass the error handling function into the utils lib

  return (
    <>
      <User.Provider>
        <div className="App">
          <header className="App-header">
            <span className="header">Airline Travel API Portal</span>
            <User />        
          </header>

          <main className="xcontainer">

            <Pages.NavBar />

            <div className="row">

              <div className="sidebar column">
                <Pages.SideBar>
                  {/* <div>This is a child "component"</div>
                  <div>This is another child entry</div> */}
                </Pages.SideBar>
              </div>

              <div className="canvas column">
                <Pages.Routes />
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
