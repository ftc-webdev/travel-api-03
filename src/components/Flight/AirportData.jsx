import { useState } from 'react'
import Airport from './Airport'
import { Input } from './Form'
import models from '../models'

const AirportData = () => {

  const [airportData, setAirportData ] = useState(null)
  let airportCode 

  const getAirportData = async (airportCode) => {

    // const data = await sampleSearchAirportCode(airportCode)
    const data = await models.airports.get(airportCode)
    setAirportData(data)
    
  }
  const onAirportCodeEnter = (e) => {
    let airportCode = e.target.value
    if(e.keyCode === 13) {
      getAirportData(airportCode)
    }
    
  }

  return (
    <> 
      <Input 
        label="Enter Airport Code" 
        value={airportCode} 
        onEnter={onAirportCodeEnter} 
        onChange={(e) => e.target.value = e.target.value.toUpperCase()}
        placeholder="Enter an airport code"
      />
      {airportData && <Airport airport={airportData} />} 
    </>
  )
}

export default AirportData