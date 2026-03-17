import { Link } from "react-router-dom"

function About() {
  return (
    <section>
      <h1>About</h1>
      <p>
        Craftsvilla har som mål å tilby kreative workshops og aktiviteter som
        fremmer samhold og avslapning blant ulike grupper som foreldre og barn,
        venner, kolleger og flere. Målet er å skape et innbydende rom hvor folk
        i alle aldre kan nyte kvalitetstid sammen i fritiden, lage kunst og
        utforske kreativiteten sin.
      </p>
      <Link to="/booking">Book now</Link>
    </section>
  )
}

export default About
