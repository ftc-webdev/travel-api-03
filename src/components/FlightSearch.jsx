import AirportSearch from './AirportSearch' 
import Offers from './Offers'
import { useState } from 'react'
import { Input, Button } from './Form'
import apis from '../apis'
const { duffel } = apis

const FlightSearch = () => {
  const [ sourceAirportCode, setSourceAirportCode ] = useState()
  const [ destinationAirportCode, setDestinationAirportCode ] = useState()
  const [ departureDate, setDepartureDate ] = useState()
  const [ offers, setOffers ] = useState()

  const onDateChange = (e) => {
    const date = e.target.value
    console.log("date", date, typeof date)
    // setDepartureDate(date.toISOString())  // yyyy-mm-dd
    setDepartureDate(date)  // yyyy-mm-dd
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
    const offers = data.data
    console.log("offers", offers)
    setOffers(offers)

  }

  return (
    <>
      
      <AirportSearch label="Source"  onSelect={setSourceAirportCode}/>
      {/* value={sourceAirportCode} */}

      <AirportSearch label="Destination"  onSelect={setDestinationAirportCode} />
      {/* value={destinationAirportCode} */}
      
      <Input label = "Departure Date" value={departureDate} onChange={onDateChange} type="date" /> 

      <Button label="Search" onClick={onSearch} />
      {
        offers && <Offers offers={offers} />
      }
    </>
  )
}

export default FlightSearch