import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom'

const SideBar = ({ children }) => {
  return (
    <>
      <Sidebar>
        <Menu>
          <MenuItem component={<NavLink to="/"/>}> Home </MenuItem>
          <MenuItem component={<NavLink to="/booking"/>}> Booking </MenuItem>
          <MenuItem component={<NavLink to="/past-bookings"/>}> Past Bookings </MenuItem>
          {/* <MenuItem component={<NavLink to="/children"/>}> Children </MenuItem> */}
          { children }
        </Menu>
      </Sidebar>
    </>
  )
}

export default SideBar