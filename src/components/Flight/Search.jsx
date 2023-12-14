import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { NotificationContext } from '../../context/Notification'
import BookingContext from './Context'

import AirportSearch from './AirportSearch' 
// import Offers from './Offers'
import {tmw, isoDate } from '../../utils'

import { Input, Button, RadioButton } from '../Form'
import apis from '../../apis'
const { duffel } = apis


const Search = () => {

  // just a test of notification
  useEffect(() => {
    message("Hello from FlightSearch!!")
  }, [])

  const { message } = useContext(NotificationContext)
  const bookingContext = useContext(BookingContext)
  const { search, setSearch } = bookingContext

  const navigate = useNavigate()

  // these are the request values needed for flight search
  const [ sourceAirportCode, setSourceAirportCode ] = useState('')
  const [ destinationAirportCode, setDestinationAirportCode ] = useState('')
  const [ departureDate, setDepartureDate ] = useState('')
  const [ singleReturn, setSingleReturn  ] = useState('single')
  const [ returnDate, setReturnDate ] = useState('')
  
  // pull these state values from context
  const { passengers, setPassengers, setOfferRequest, setOffers } = bookingContext


  // const [ offers, setOffers ] = useState()

  useEffect(() => {
    console.log("useEffect:search")
    if(bookingContext.search) {
      console.log("useEffect:search - restore search values", bookingContext.search)
      const {sourceAirportCode, destinationAirportCode, departureDate, singleReturn, returnDate} = bookingContext.search
      // should trigger a render - it isn't :-(
      setSourceAirportCode(sourceAirportCode)
      setDestinationAirportCode(destinationAirportCode)
      setDepartureDate(departureDate)
      setSingleReturn(singleReturn)
      setReturnDate(returnDate)
  
    } else {
      if(!departureDate) setDepartureDate(tmw())
    }
    
  }, [ bookingContext.search, departureDate ])

  const onRadioSingleReturn = (e) => {
    const value = e.target.value
    // setSingleReturn("single")
    setSingleReturn(value)
  }

  const onDepartDateChange = (date, e) => {
    console.log("e", e, date)
    // const date = e.target.value
    setDepartureDate(date)  // yyyy-mm-dd
  }

  const onReturnDateChange = (date, e) => {
    console.log("e", e)
    // const date = e.target.value
    setReturnDate(date)  // yyyy-mm-dd
  }

  const onSearch = async () => {
    // setPassengers is async, and passegers is a const
    // if(passengers.length === 0) passengers = [{ type: "adult" }]  // no default value??
    const request = {
      sourceAirportCode,
      destinationAirportCode,
      departureDate,
      passengers,
      // passengers: [{ type: "adult" }]
    }
    
    setSearch( request )
    // bookingContext.search = request // store it on the context

    console.log("search", request)
    const offerRequest = await duffel.search.get(request)
    // console.log("search resp", resp, "offers", resp.data.offers.length, "offer0", resp.data.offers[0])
    setOfferRequest( offerRequest.data )
    // bookingContext.offerRequest = offerRequest.data

    const resp = await duffel.offers.get(offerRequest.data.id)
    // bookingContext.offers = resp.offers
    // bookingContext.passengers = resp.passengers
    setOffers(resp.offers)
    setPassengers(resp.passengers)

    navigate("/offers")
  }

  return (
    <>
      <div className="row border single-return" 
      // onChange={onRadioSingleReturn}
      >

        <RadioButton name="single-return" label="One Way" value="single" 
        // onClick={onRadioSingle} 
          onChange={onRadioSingleReturn}
          checked={singleReturn === "single"} />
        <RadioButton name="single-return" label="Return" value="return" 
        // onClick={onRadioReturn} 
        onChange={onRadioSingleReturn}
        checked={singleReturn === "return"}/>

      </div>
      
      <div id="airport-search" className="row border">

        <AirportSearch 
          id="source" 
          value={sourceAirportCode} 
          label="Source" 
          onSelect={setSourceAirportCode} 
        />

        <AirportSearch 
          id="destination" 
          value={destinationAirportCode}
          label="Destination" 
          onSelect={setDestinationAirportCode} 
        />
      </div>

      <div className="row">
        <Input label = "Departure Date" value={departureDate} onChange={onDepartDateChange} type="date" /> 

        { singleReturn === "return" && 
          <Input label = "Return  Date" value={returnDate} onChange={onReturnDateChange} type="date" /> 
        }

        <Button label="Search" onClick={onSearch} />

      </div>
      
      {/* { // now displayed on it's own page see Offers.jsx
        offers && <Offers offers={offers}  />
      } */}
    </>
  )
}

export default Search