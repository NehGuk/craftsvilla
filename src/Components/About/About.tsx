import "./About.css"
import { Link } from "react-router-dom"
import aboutImg from "../../assets/gallery/leirettsmaling/josep-martins-l3-erg8nPRU-unsplash.webp"

function About() {
  return (
    <section className="content">
      <h1>About</h1>
      <article>
        <img
          src={aboutImg}
          className="deco_img"
          alt="About us: decorative image"
        />
        <p className="about_text">
          <strong>Craftsvilla</strong> har som mål å tilby kreative workshops og
          aktiviteter som fremmer samhold og avslapning blant ulike grupper som
          foreldre og barn, venner, kolleger og flere. Målet er å skape et
          innbydende rom hvor folk i alle aldre kan nyte kvalitetstid sammen i
          fritiden, lage kunst og utforske kreativiteten sin.
        </p>
        <div className="cta_container">
          <Link to="/booking" className="cta">
            Book now
          </Link>
        </div>
      </article>
    </section>
  )
}

export default About
