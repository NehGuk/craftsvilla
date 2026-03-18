import "./App.css"
import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav/Nav"
import Booking from "./Components/Booking/Booking"
import Gallery from "./Components/Gallery/Gallery"
import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Lerretsmaling from "./Components/Activities/Lerretsmaling/Lerretsmaling"
import Akvarellmaling from "./Components/Activities/Akvarellmaling/Akvarellmaling"
import MosaikkKunst from "./Components/Activities/MosaikkKunst/MosaikkKunst"
import ThankYou from "./Components/ThankYou/ThankYou"

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/activities/mosaikkkunst" element={<MosaikkKunst />} />
          <Route
            path="/activities/akvarellmaling"
            element={<Akvarellmaling />}
          />
          <Route path="/activities/lerretsmaling" element={<Lerretsmaling />} />
        </Routes>
      </main>
      <Nav />
    </>
  )
}

export default App
