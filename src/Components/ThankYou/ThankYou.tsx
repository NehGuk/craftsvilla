import "./ThankYou.css"
import { Link } from "react-router-dom"

function ThankYou() {
  return (
    <section className="content">
      <h1>Thank you!</h1>
      <article className="thank_you_message">
        <p>
          Your message has been received and we'll be in touch as soon as
          possible.
        </p>
        <Link to="/">Back to home</Link>
      </article>
    </section>
  )
}

export default ThankYou
