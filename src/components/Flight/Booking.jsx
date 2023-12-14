import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BookingContext from './Context'
// import { NotificationContext } from '../../context/Notification'
import Field from '../Field'
import DuffelOffer from './DuffelOffer'
import { DuffelPayments } from "@duffel/components"
// import { DuffelPayments } from './DuffelPayments.tsx'
import api from "../../apis"
const { duffel } = api

const Booking = () => {

  const bookingContext = useContext(BookingContext)
  console.log("booking ctx", bookingContext)
  const navigate = useNavigate()
  
  const [ paymentIntent, setPaymentIntent ] = useState()

  // const [booking, setBooking ] = useState()
  // const [selectedOffer, setSelectedOffer ] = useState()
  const {booking, setBooking, selectedOffer, setSelectedOffer } = bookingContext

  useEffect(() => {
    setBooking(bookingContext.booking)
    setSelectedOffer(bookingContext.selectedOffer)
  }, [bookingContext.booking, bookingContext.selectedOffer, setBooking, setSelectedOffer])
  
  // simplify the offer structure
  const duffelOffer = DuffelOffer(selectedOffer)
  /*
    construct a Order object for Duffel
  */
  const Order = () => {
    const { passengers, selectedOffer } = bookingContext
    return {
      passengers, 
      type: "hold",  // we can process payment in advance, and make "instant"
      selected_offers: [ selectedOffer.id ]
    }
  }

  const onProceed = async () => {
    // const data = await duffel.orders.get(Order())
    // get a payment intent
    // console.log("Order", data)
    const pi = await duffel.payments.create(duffelOffer.getTotal())
    console.log("pi", pi)
    setPaymentIntent(pi)
  }

  const onSuccessfulPayment = () => {

  }
  const onFailedPayment = (err) => {

  }

  return (
    <>

      <div className="booking container">
        <div className="booking border">
          <button className="btn" onClick={() => navigate(-1)}>{"<< Passengers"}</button>
          <span className="heading">Complete Booking</span>
          <button className="btn" onClick={() => navigate("/bookings")}>{"Bookings >>"}</button>
        </div>
        <h4>Flight Details</h4>
        <Field label="From" data={duffelOffer.source} />
        <Field label="To" data={duffelOffer.destination} />
        <Field label="On" data={duffelOffer.departingAt} />
        <Field label="Flight" data={duffelOffer.flight} />
        <Field label="Cost" data={duffelOffer.total} />
        <button className="btn" onClick={onProceed}>Proceed</button>
      </div>

      {
        paymentIntent && <DuffelPayments
          paymentIntentClientToken={paymentIntent.client_token}
          onSuccessfulPayment={onSuccessfulPayment}
          onFailedPayment={onFailedPayment}
        />


      }
    </>
  )

}

export default Booking