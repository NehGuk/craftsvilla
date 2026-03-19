import "./MosaikkKunst.css"
import { Link } from "react-router-dom"
import mosaikkKunstCover from "../../../assets/gallery/mosaikkkunst/anna-hu-m4wgQdEsJZU-unsplash.jpg"

function MosaikkKunst() {
  return (
    <section className="content">
      <h1>Mosaikk Kunst</h1>
      <article className="activity_area">
        <img src={mosaikkKunstCover} className="deco_img" />
        <p className="activity_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          blanditiis dicta? Odio in itaque ducimus sed magnam, sit eligendi
          sapiente enim, cupiditate voluptate laboriosam dolore necessitatibus.
          Ab alias molestiae cumque.
        </p>

        <div className="activity_details">
          <div className="activity_details__info">
            <p>Sett inkluderer:</p>
            <ul>
              <li>Ramme</li>
              <li>A4 størrelse treplate</li>
              <li>Små fargede steiner</li>
              <li>Gummi</li>
            </ul>
          </div>
          <div className="activity_details__price">
            <p>
              Pris: <strong>NOK 400</strong>
            </p>
          </div>
        </div>
      </article>
      <div className="cta_container activity_cta">
        <Link to="/booking" className="cta">
          Book now
        </Link>
      </div>
    </section>
  )
}

export default MosaikkKunst
