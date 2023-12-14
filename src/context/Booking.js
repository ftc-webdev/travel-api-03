// this is where we declare/define the context
import { createContext } from 'react'

const booking = {
  search: null, // store search parameters here - ie state variables from FlightSearch
  offers: [],  // 
  selectedOffer: null,
  passengers: [],
  booking: null,
}

const BookingContext = createContext(booking)

export default BookingContext