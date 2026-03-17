import { Link } from "react-router-dom"

function ThankYou() {
  return (
    <section>
      <h1>Thank you</h1>
      <p>We'll be in touch as soon as possible.</p>
      <Link to="/booking">Back to home</Link>
    </section>
  )
}

export default ThankYou
