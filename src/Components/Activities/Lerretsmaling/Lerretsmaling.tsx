import { Link } from "react-router-dom"

function Lerretsmaling() {
  return (
    <section className="content">
      <h1>Lerretsmaling</h1>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          blanditiis dicta? Odio in itaque ducimus sed magnam, sit eligendi
          sapiente enim, cupiditate voluptate laboriosam dolore necessitatibus.
          Ab alias molestiae cumque. Sett inkluderer: Ramme, A4 størrelse
          treplate, små fargede steiner, gummi.
        </p>
        <ul>
          <li>Ramme</li>
          <li>Akvarellpapir med designmal</li>
          <li>Akvarellfarger</li>
          <li>Pensler</li>
        </ul>
      </article>
      <article>
        <p>Pris: NOK 200</p>
      </article>
      <Link to="/booking">Book now</Link>
    </section>
  )
}

export default Lerretsmaling
