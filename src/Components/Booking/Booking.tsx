import { Link } from "react-router-dom"
import "./Booking.css"

function Booking() {
  return (
    <section className="booking">
      <h1>Booking</h1>
      <article>
        <iframe
          className="calendar"
          src="https://teamup.com/ks65if3v84z3g7waoo?tz=Calendar%20default&showSearch=1&showProfileAndInfo=0&showSidepanel=1&showTitle=0&showViewHeader=0&showAgendaDetails=0&showDateControls=1&showDateRange=1"
          loading="lazy"
          title="Craftsvilla calendar"
        ></iframe>
      </article>
      <article className="booking_content">
        <div className="activity">
          <h2>Mosaikk Kunst</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            commodi rem suscipit fugit veniam, ratione fuga id voluptatibus
            ullam aliquam.{" "}
            <Link to="/activities/mosaikkkunst">
              <span>Read more</span>
            </Link>
          </p>
          <p>NOK 400</p>
        </div>
        <div className="activity">
          <h2>Akvarellmaling</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            commodi rem suscipit fugit veniam, ratione fuga id voluptatibus
            ullam aliquam quia accusantium quasi.{" "}
            <Link to="/activities/akvarellmaling">
              <span>Read more</span>
            </Link>
          </p>
          <p>NOK 300</p>
        </div>
        <div className="activity">
          <h2>Lerretsmaling</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            commodi rem suscipit fugit veniam, ratione fuga id voluptatibus
            ullam aliquam quia.{" "}
            <Link to="/activities/lerretsmaling">
              <span>Read more</span>
            </Link>
          </p>
          <p>NOK 200</p>
        </div>
      </article>
      <article className="booking_content">
        <div className="signup_info">
          <div className="signup_info_text">
            {/* <h2>How to sign up</h2> */}
            <p>
              <strong>How to sign up?</strong> On the calendar above, find the
              desired session and click "Signup". For personalised sessions, or
              inquiries regarding larger groups, please get in touch and our
              team will get back to you in the coming days.
            </p>
          </div>
          <div className="cta_container signup_info_cta">
            <Link to="/contact" className="cta">
              Get in touch
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Booking
