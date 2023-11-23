import { useState } from 'react'
// import { sampleSearchAirlineCode } from '../data'
import { Input } from './Form'
import Airline from './Airline'
import models from '../models'

const AirlineData = () => {
  
  const [airlineData, setAirlineData ] = useState(null)
  // const [airlineCode ] = useState()
  let airlineCode

  const getAirlineData = async (airlineCode) => {
    // go off and fetch the data
    // const data = await sampleSearchAirlineCode(airlineCode)
    const data = await models.airlines.get(airlineCode)

    setAirlineData(data)
  }

  const onAirlineCodeEnter = (e) => {
    let airlineCode = e.target.value
    if(e.keyCode === 13) {
      getAirlineData(airlineCode)
    }
    
  }

  return (
    <>
      <Input 
        label="Enter Airline Code" 
        value={airlineCode} 
        onEnter={onAirlineCodeEnter} 
        onChange={(e) => e.target.value = e.target.value.toUpperCase()}
        placeholder="Enter an airline code"
      />
      {airlineData && <Airline airline={airlineData} />}
    </>
  )
}

export default AirlineData



