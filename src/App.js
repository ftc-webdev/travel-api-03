import { useState } from 'react'
import './App.css';
import AirlineData from './components/AirlineData'
import AirportData from './components/AirportData'
import Countries from './components/Countries'

import apis from './apis'


const App = () => {
  // const [ geoData, setGeoData ] = useState()
  const [ country, setCountry ] = useState()

  const onGeoLocateClick = () => {
    apis.ip2location.location.get()
    .then(data => {
      // setGeoData(data)
      setCountry(data.country_name)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        Airline Travel API Portal        
      </header>
      <main>
        <Countries label="Countries" />
        
        <AirlineData />
        
        <AirportData />

        <button
          className="btn"
          onClick={onGeoLocateClick}
        >
          GeoLocate This Computer
        </button>
        {country && <div><span>Country</span><span>{country}</span></div>}
      </main>

    </div>
  );
}

export default App;
