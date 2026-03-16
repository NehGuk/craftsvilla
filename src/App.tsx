import { Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Nav from "./Nav/Nav"
import Booking from "./Booking/Booking"
import Gallery from "./Gallery/Gallery"
import Contact from "./Contact/Contact"

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Nav />
    </>
  )
}

export default App
