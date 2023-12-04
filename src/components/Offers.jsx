import Field from './Field'

const time = (datetime) => {
  const time = datetime.slice(-8)
  return time.slice(0, 5)
}

const Offer = ({ offer }) => {
  // console.log("Offer", offer)
  const { airline, total_amount, total_currency, slices } = offer
  return (
    <>

      <tr className="row">
        <td className="airline-logo-name column">
          <div className="row">
            <img className="airline-logo" src={airline.logo_url} alt="Airline Logo"/>
            <span className="table-airline-name">{airline.name}</span>
          </div>
        </td>
        {/* <td className="column table-airline-name">{airline.name}</td> */}
        <td className="column">{total_amount + " " + total_currency}</td>
        <td className="column">{time(slices[0].segments[0].departing_at)}</td>
        <td className="column">{time(slices[0].segments[0].arriving_at)}</td>
        <td className="column">{slices[0].segments[0].flight_number}</td>
        <td className="column">{slices[0].segments[0].stops.length}</td>
      </tr>
    {/* </div> */}
    </>
  )
}

const TableHeads = () => {
  return (
      <tr className="row">
        <th className="airline-logo-name column">Airline</th>
        <th className="column">Cost</th>
        <th className="column">Departing</th>
        <th className="column">Arriving</th>
        <th className="column">FL Number</th>
        <th className="column">Stops</th>
      </tr>
  )
}


const Offers = ({ offers }) => {
  // console.log("Offers", offers)
  return (
    <div className="offers border">
      <h2>Offers</h2>
      {
        offers && <table className="offers border"><TableHeads />{offers.map(offer => <Offer offer={offer}/> )}</table>
      }
    </div>
  )
}

export default Offers