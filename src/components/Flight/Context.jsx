import { createContext, useState } from 'react'

/*
  this is just for info purposes
  the actual context object is created in the Provider
  using state variables, and state mutators
*/
const defaultBooking = {
  search: null, // store search parameters here - ie state variables from FlightSearch
  offerRequest: null,
  offers: [],  // 
  selectedOffer: null,
  passengers: [{ type: "adult" }], 
  booking: null,
}
const Context = createContext(defaultBooking)

export default Context