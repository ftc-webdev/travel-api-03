import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/flights">Flights</NavLink></li>
        <li><NavLink to='/booking'>Booking</NavLink></li>
        <li><NavLink to='/past-bookings'>Past Bookings</NavLink></li>
        <li><NavLink to='/children'>Children</NavLink></li>


      </ul>

    </nav>
  )
}

export default NavBar