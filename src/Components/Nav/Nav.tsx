import { NavLink } from "react-router-dom"
import "./Nav.css"

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/booking">Booking</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Nav
