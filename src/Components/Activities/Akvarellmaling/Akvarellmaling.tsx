import "./Akvarellmaling.css"
import { Link } from "react-router-dom"
import akvarellmalingCover from "../../../assets/gallery/akvarellmaling/greg-rosenke-TMXIWZncTZU-unsplash.webp"

function Akvarellmaling() {
  return (
    <section className="content">
      <h1>Akvarellmaling</h1>
      <article className="activity_area">
        <img src={akvarellmalingCover} className="deco_img" />
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
              <li>Akvarellpapir med designmal</li>
              <li>Akvarellfarger</li>
              <li>Pensler</li>
            </ul>
          </div>
          <div className="activity_details__price">
            <p>
              Pris: <strong>NOK 200</strong>
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

export default Akvarellmaling
