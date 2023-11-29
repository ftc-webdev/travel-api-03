import Field from './Field'

const Offer = ({ offer }) => {
  return (
    <div className="offer">
      <img className="airline-logo" src={offer.owner.logo_symbol_url} alt="Airline Logo"/>
      <Field label="Carrier" data={offer.owner.name} />
      {/* <Field label="Origin" data={offer.slices[0].origin.iata_code} /> */}
      {/* <Field label="Destination" data={offer.slices[0].destination.iata_code} /> */}
      <Field label="Total" data={offer.total_amount + " " + offer.total_currency} />
      <Field label="Departs" data={offer.slices[0].segments[0].departing_at} />
      <Field label="Arrives" data={offer.slices[0].segments[0].arriving_at} />
      <Field label="Flight #" data={offer.slices[0].segments[0].operating_carrier_flight_number} />
      <Field label="Stops" data={offer.slices[0].segments[0].stops.length} />
    </div>
  )
}


const Offers = ({ offers }) => {
  return (
    <div className="offers">
      <h2>Offers</h2>
      {
        offers && offers.map(offer => <Offer offer={offer} />)
      }
    </div>
  )
}

export default Offers