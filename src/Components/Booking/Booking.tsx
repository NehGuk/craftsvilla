import { Link } from "react-router-dom"
import "./Booking.css"

function Booking() {
  return (
    <section>
      <h1>Booking</h1>
      <article>
        <iframe
          className="calendar"
          src="https://teamup.com/ks65if3v84z3g7waoo?tz=Calendar%20default&showSearch=1&showProfileAndInfo=0&showSidepanel=1&showTitle=0&showViewHeader=0&showAgendaDetails=0&showDateControls=1&showDateRange=1"
          /* style={{ width: "80%", height: "600px" }} */
          loading="lazy"
          title="Craftsvilla calendar"
        ></iframe>
      </article>
      <article>
        <h2>Mosaikk Kunst</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae commodi
          rem suscipit fugit veniam, ratione fuga id voluptatibus ullam aliquam
          quia accusantium quasi voluptatum modi. Repellat rerum dignissimos
          harum veritatis?
        </p>
        <p>Pris: NOK 400</p>
        <h2>Akvarellmaling</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae commodi
          rem suscipit fugit veniam, ratione fuga id voluptatibus ullam aliquam
          quia accusantium quasi voluptatum modi. Repellat rerum dignissimos
          harum veritatis?
        </p>
        <p>Pris: NOK 300</p>
        <h2>Lerretsmaling</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae commodi
          rem suscipit fugit veniam, ratione fuga id voluptatibus ullam aliquam
          quia accusantium quasi voluptatum modi. Repellat rerum dignissimos
          harum veritatis?
        </p>
        <p>Pris: NOK 200</p>
      </article>
      <article>
        <h2>How to sign up</h2>
        <p>
          On the calendar above, find the desired session and click "Signup".
          For personalised sessions, or inquiries regarding larger groups,
          please get in touch and our team will get back to you in the coming
          days.
        </p>
        <Link to="/contact" className="cta">
          Get in touch
        </Link>
      </article>
    </section>
  )
}

export default Booking
