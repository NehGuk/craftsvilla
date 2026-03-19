import "./Lerretsmaling.css"
import { Link } from "react-router-dom"
import lerretsmalingCover from "../../../assets/gallery/leirettsmaling/anne-nygard-HUdZ00yfTXE-unsplash.jpg"

function Lerretsmaling() {
  return (
    <section className="content">
      <h1>Lerretsmaling</h1>
      <article className="activity_area">
        <img src={lerretsmalingCover} className="deco_img" />
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
              <li>Akrylpapir med designmal</li>
              <li>Akrylfarger</li>
              <li>Pensler</li>
            </ul>
          </div>
          <div className="activity_details__price">
            <p>
              Pris: <strong>NOK 300</strong>
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

export default Lerretsmaling
