import "./Home.css"
import { Link } from "react-router-dom"

function Home() {
  return (
    <section className="main_container">
      <h1>Home</h1>

      <Link to="/activities/mosaikkkunst" className="area_activity">
        <h2>Mosaikk Kunst</h2>
      </Link>
      <Link to="/activities/akvarellmaling" className="area_activity">
        <h2>Akvarellmaling</h2>
      </Link>
      <Link to="/activities/lerretsmaling" className="area_activity">
        <h2>Lerretsmaling</h2>
      </Link>
    </section>
  )
}

export default Home
