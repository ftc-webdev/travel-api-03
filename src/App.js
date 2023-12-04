import './App.css';
import { Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Booking  from './pages/Booking'
import NotFound  from './pages/NotFound'
import PastBookings from './pages/PastBookings'
import ChildrenPage from './pages/ChildrenPage'

import NavBar from './components/NavBar'
import SideBar from './components/SideBar'

const App = () => {
  // const [ geoData, setGeoData ] = useState()

  return (
    <div className="App">
      <header className="App-header">
        Airline Travel API Portal        
      </header>

      <main class="xcontainer">

        <NavBar />

        <div className="row">

          <div className="sidebar column">
            <SideBar>
              <div>This is some text</div>
              <div>This is some more text</div>
            </SideBar>
          </div>

          <div className="canvas column">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/past-bookings" element={<PastBookings />} />
              <Route path="/children" element={<ChildrenPage />} />
              
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>

      </main>

    </div>
  );
}

export default App;
