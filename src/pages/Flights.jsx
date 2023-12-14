import Flight from '../components/Flight'

const Flights = () => {
  return (
    <>
      <div>Flight</div>
      <Flight.Search />

    </>
  )
}

// these are used by the routing in pages/index.js
Flights.Search = Flight.Search
Flights.Passengers = Flight.Passengers
Flights.Offers = Flight.Offers
Flights.Booking = Flight.Booking

export default Flights