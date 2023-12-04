import AirportSearch from './AirportSearch' 
import Offers from './Offers'
import { useState, useEffect } from 'react'
import { Input, Button, RadioButton } from './Form'
import apis from '../apis'
const { duffel } = apis


const isoDate = (d) => {
  const str = d.toISOString()
  return str.substring(0, 10)
} 
const tmw = (d) => {
  if (!d) d = new Date()
  d.setDate(d.getDate() + 1)
  return isoDate(d)
}

const FlightSearch = () => {
  const [ sourceAirportCode, setSourceAirportCode ] = useState()
  const [ destinationAirportCode, setDestinationAirportCode ] = useState()
  const [ departureDate, setDepartureDate ] = useState()
  const [ returnDate, setReturnDate ] = useState()
  const [ offers, setOffers ] = useState()
  const [ singleReturn, setSingleReturn  ] = useState()

  useEffect(() => {
    setDepartureDate(tmw())
  }, [])

  const onRadio = (e) => {
    const value = e.target.value
    console.log("single-return", value)
    setSingleReturn(value)
  }

  const onDepartDateChange = (e) => {
    const date = e.target.value
    setDepartureDate(date)  // yyyy-mm-dd
  }

  const onReturnDateChange = (e) => {
    const date = e.target.value
    setReturnDate(date)  // yyyy-mm-dd
  }

  const onSearch = async () => {
    const request = {
      sourceAirportCode,
      destinationAirportCode,
      departureDate,
      passengers: [{ type: "adult" }]
    }
    console.log("search", request)
    const offerRequest = await duffel.search.get(request)
    // console.log("search resp", resp, "offers", resp.data.offers.length, "offer0", resp.data.offers[0])

    const data = await duffel.offers.get(offerRequest.data.id)
    const offers = data.offers
    // console.log("offers", offers)
    setOffers(offers)

  }

  return (
    <>
      <div className="row border single-return">

        <RadioButton name="single-return" label="One Way" value="single" onChange={onRadio}/>
        <RadioButton name="single-return" label="Return" value="return" onChange={onRadio}/>

      </div>
      
      <div id="airport-search" className="row border">

        <AirportSearch id="source" label="Source" onSelect={setSourceAirportCode} />
        {/* value={sourceAirportCode}  */}

        <AirportSearch id="destination" label="Destination" onSelect={setDestinationAirportCode} />
        {/* value={destinationAirportCode} */}
      </div>

      <div className="row">
        <Input label = "Departure Date" value={departureDate} onChange={onDepartDateChange} type="date" /> 

        { singleReturn === "return" && 
          <Input label = "Return  Date" value={returnDate} onChange={onReturnDateChange} type="date" /> 
        }

        <Button label="Search" onClick={onSearch} />

      </div>
      
      {
        offers && <Offers offers={offers} />
      }
    </>
  )
}

export default FlightSearch