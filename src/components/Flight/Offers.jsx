import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BookingContext from './Context'
import { NotificationContext } from '../../context/Notification'
import DuffelOffer from './DuffelOffer'
// import Field from './Field'


const Offer = ({ offer, index, onOfferSelected }) => {

  // create a simplified offer object
  const duffelOffer = DuffelOffer(offer)

  const selectOffer = (e) => {
    const tr = e.currentTarget
    // console.log("select", e, tr, tr.dataset.index)
    const radio = tr.firstChild.firstChild
    radio.checked = true
    // console.log("radio", radio)
    onOfferSelected(tr.dataset.index)
  }
  
  return (
    <>

      <tr className="row" data-index={index} onClick={selectOffer}>
        <td><input type="radio" name="outbound" /></td>
        <td className="airline-logo-name column">
          <div className="row">
            <img className="airline-logo" src={duffelOffer.airlineLogo} alt="Airline Logo"/>
            <span className="table-airline-name">{duffelOffer.airlineName}</span>
          </div>
        </td>
        <td className="column">{offer.total}</td>
        <td className="column">{duffelOffer.departingAt}</td>
        <td className="column">{duffelOffer.arrivingAt}</td>
        <td className="column">{duffelOffer.flightNumber}</td>
        <td className="column">{duffelOffer.stops}</td>
      </tr>
    </>
  )
}

const TableHeads = () => {
  return (
    <thead>
      <tr className="row">
        {/* <th>Select</th> */}
        <th className="airline-logo-name column">Airline</th>
        <th className="column">Cost</th>
        <th className="column">Departing</th>
        <th className="column">Arriving</th>
        <th className="column">FL Number</th>
        <th className="column">Stops</th>
      </tr>
    </thead>
  )
}

// let counter = 0
const Offers = () => {

  const { message } = useContext(NotificationContext)
  const bookingContext = useContext(BookingContext)
  const [ offers, setOffers ] = useState([])
  
  const [ selectedOffer, setSelectedOffer ] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    // console.log("context", bookingContext)
    setOffers(bookingContext.offers)
  }, [])

  const onOfferSelected = (index) => {
    console.log("offer", offers[index])
    bookingContext.setSelectedOffer(offers[index])  // set on context
    // bookingContext.selectedOffer = offers[index]
    setSelectedOffer( offers[index] ) // local state
  }
  // console.log("Offers", offers)
  return (
    <div className="offers border">
      <button className="btn" onClick={() => navigate(-1)}>{"<< Search"}</button>
      <span className="heading">Offers</span>
      <button className="btn" onClick={() => navigate("/passengers")}>{"Passengers >>"}</button>
      {
        offers && 
          <table className="offers border">
            <TableHeads />
            <tbody>
              {offers.map((offer, index) => <Offer key={index} index={index} offer={offer} onOfferSelected={onOfferSelected}/> )}
            </tbody>
          </table>
      }
    </div>
  )
}

export default Offers