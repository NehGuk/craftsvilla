import { Link } from "react-router-dom"
function Home() {
  return (
    <section>
      <h1>Home</h1>

      <Link to="/activities/mosaikkkunst">Mosaikk Kunst</Link>
      <Link to="/activities/akvarellmaling">Akvarellmaling</Link>
      <Link to="/activities/lerretsmaling">Lerretsmaling</Link>
    </section>
  )
}

export default Home
