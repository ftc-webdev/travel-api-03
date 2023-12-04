import { useNavigate } from 'react-router-dom'
import MyTabs from '../components/MyTabs'

const Component = ({header}) => {
  return (
    <>
      {header && <h2>{header}</h2>}
      <div>This is some text</div>
    </>
  )

}

const options = [
  { label:"About", component: <div>This is a component</div> },
  { label:"More Info", component: <Component />}

]

const PastBookings = () => {
  const navigate = useNavigate()
  return (
    <>
      <h2>Past Bookings</h2>


      <MyTabs options={options} />

      <button 
        className="btn"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>

      <button 
        className="btn"
        onClick={() => navigate("/booking")}
      >
        Booking
      </button>


    </>
  )
}

export default PastBookings