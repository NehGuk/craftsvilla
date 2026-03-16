import { Link } from "react-router-dom"
function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Home content here. Section with link to activities.</p>
      <Link to="/activities/mosaikkkunst">Mosaikk Kunst link here</Link>
      <Link to="/activities/akvarellmaling">Akvarellmaling link here</Link>
      <Link to="/activities/lerretsmaling">Lerretsmaling link here</Link>
    </>
  )
}

export default Home
