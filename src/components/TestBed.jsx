import { useState } from 'react'
import AirlineData from './components/AirlineData'
import AirportData from './components/AirportData'
import Countries from './components/Countries'
import AirportSearch from './components/AirportSearch'

import apis from './apis'

const TestBed = () => {

  const [ country, setCountry ] = useState()

  const onGeoLocateClick = () => {
    apis.ip2location.location.get()
    .then(data => {
      // setGeoData(data)
      setCountry(data.country_name)
    })
  }
  return (
    <>
      <AirportSearch label="Airport"/>

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

    
    
    </>
  )
}

export default TestBed