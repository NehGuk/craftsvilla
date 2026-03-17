import { NavLink } from "react-router-dom"
import "./Nav.css"
import logo from "../../assets/logo.png"

function Nav() {
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="Craftsvilla logo" className="logo_nav" />
      </NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/booking">Booking</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}

export default Nav
