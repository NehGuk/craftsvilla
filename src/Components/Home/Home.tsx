import { Link } from "react-router-dom"
function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Home content here. Section with link to activities.</p>
      <Link to="/activities/mosaikkkunst">Mosaikk Kunst</Link>
      <Link to="/activities/akvarellmaling">Akvarellmaling</Link>
      <Link to="/activities/lerretsmaling">Lerretsmaling</Link>
    </>
  )
}

export default Home
