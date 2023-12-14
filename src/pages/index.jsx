import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Sidebar, Menu, MenuItem /*, SubMenu */ } from 'react-pro-sidebar';
// pages
import Home from './Home'
import Flights  from './Flights'
// import Booking  from './Booking'
import Bookings from './Bookings'
// import ChildrenPage from './ChildrenPage'
// import TestPage from './TestPage'

import User from '../components/User'

import NotFound  from './NotFound'

const pages = [
  {name: "Home", title: "Home", path: "/", element: Home},
  {name: "Flights", title: "Flights", path: "/flights", element: Flights},
  // {name: "Booking", title: "Booking", path: "/booking", element: Booking},
  {name: "Past Bookings", title: "Bookings", path: "/bookings", element: Bookings},
  // {name: "Children", title: "Children", path: "/children", element: ChildrenPage},
  // {name: "TestPage", title: "Test Page", path: "/test-page", element: TestPage},
]

const Pages = {}

let pageNo = 1
// Pages.Routes is a component to render the routes element
Pages.Routes = () => {
  return (
    <Routes>
      {
        pages.map(page => <Route 
          key={pageNo++}
          path={page.path} 
          element={page.element()} 
        />
        )
      }

      {/* set up routes for flight search screens */}
      <Route path="/offers" element={<Flights.Offers />} />
      <Route path="/passengers" element={<Flights.Passengers />} />
      <Route path="/booking" element={<Flights.Booking />} />


      {/* set up routes for use auth screens */}
      <Route path="/login" element={<User.Login />} />
      <Route path="/register" element={<User.Register />} />

      <Route path="/*" element={<NotFound />} />

    </Routes>  

  )
}

let linkNo = 1
Pages.NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          {
            pages.map(page => <li key={linkNo++}>
              <NavLink 
                to={page.path}
              >
                {page.title}
              </NavLink> 
            </li>)
          }
        </ul>
      </nav>
    </>
  )
}
let sideLinkNo = 1
Pages.SideBar = ({ children }) => {
  return (
    <>
      <Sidebar>
        <Menu>
          {
            pages.map(page => <MenuItem 
              key={sideLinkNo++}
              component={<NavLink to={page.path}/>}>
                {page.title}
              </MenuItem>
            )
          }
          { children }
        </Menu>
      </Sidebar>
    </>
  )
}

export default Pages