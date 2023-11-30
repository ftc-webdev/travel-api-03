import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Booking  from './pages/Booking'
import NotFound  from './pages/NotFound'
import NavBar from './components/NavBar'

const App = () => {
  // const [ geoData, setGeoData ] = useState()

  return (
    <div className="App">
      <header className="App-header">
        Airline Travel API Portal        
      </header>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
