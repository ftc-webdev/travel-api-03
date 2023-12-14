import { isoTime } from '../../utils'

// simplify the offer structure
const DuffelOffer = (offer) => {
  const { airline, total_amount, total_currency, slices } = offer
  
  return {
    source: slices[0].source.iata_code + " " + slices[0].source.name,
    destination: slices[0].destination.iata_code + " " + slices[0].destination.name,
    airlineLogo: airline.logo_url,
    airlineName: airline.name,
    total: total_amount + " " + total_currency,
    departingAt: isoTime(slices[0].segments[0].departing_at),
    arrivingAt: isoTime(slices[0].segments[0].arriving_at),
    flightNumber: slices[0].segments[0].flight_number,
    flight: airline.iata_code + " " + slices[0].segments[0].flight_number,
    stops: slices[0].segments[0].stops.length,
    // this will return a total object for creating payment intent
    getTotal () {
      return {
        amount: total_amount,
        currency: total_currency,
      }
    },
    
  }
}

export default DuffelOffer