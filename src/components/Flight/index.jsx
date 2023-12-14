import { useState } from 'react'
import Context from './Context'

import Search from './Search'
import Offers from './Offers'
import Passengers from './Passengers'
import Booking from './Booking'

const Flight = {} // a container

Flight.Context = Context

// the individual screens/steps in a booking
Flight.Search = Search
Flight.Offers = Offers
Flight.Passengers = Passengers
Flight.Booking = Booking

// the provider to make the context available 
const Provider = ({children}) => {

  /*
    these represent the primary data stores for a flight booking 
    the represent the data captured and the respnses from duffel.com
    at each stage of the booking process
    we will store these on the context object so they are accessible to every step

    I might restore these values from localStorage in the case of
    a returning visitor?
   */
  const [ search, setSearch ] = useState()
  const [ offerRequest, setOfferRequest ] = useState([])  // returned from search
  const [ offers, setOffers ] = useState([])
  const [ selectedOffer, setSelectedOffer] = useState()
  const [ passengers, setPassengers ] = useState([{ type: "adult" }])
  const [ booking, setBooking ] = useState()


  const bookingContext = {
    search, setSearch,
    offers, setOffers,
    offerRequest, setOfferRequest,
    selectedOffer, setSelectedOffer,
    passengers, setPassengers,
    booking, setBooking
  }
  return (  
    <Context.Provider value={bookingContext} >
      { children }
    </Context.Provider>
    
  )
}
Flight.Provider = Provider


export default Flight