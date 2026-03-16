import { Routes, Route } from "react-router-dom"

import Nav from "./Components/Nav/Nav"
import Booking from "./Components/Booking/Booking"
import Gallery from "./Components/Gallery/Gallery"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"

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
