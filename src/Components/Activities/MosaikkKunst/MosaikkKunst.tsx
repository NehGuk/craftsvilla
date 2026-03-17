import { Link } from "react-router-dom"

function MosaikkKunst() {
  return (
    <>
      <section>
        <h1>Mosaikk Kunst</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          blanditiis dicta? Odio in itaque ducimus sed magnam, sit eligendi
          sapiente enim, cupiditate voluptate laboriosam dolore necessitatibus.
          Ab alias molestiae cumque. Sett inkluderer: Ramme, A4 størrelse
          treplate, små fargede steiner, gummi.
        </p>
        <ul>
          <li>Ramme</li>
          <li>A4 størrelse treplate</li>
          <li>Små fargede steiner</li>
          <li>Gummi</li>
        </ul>
        <p>Pris: NOK 400</p>
        <Link to="/booking">Book now</Link>
      </section>
    </>
  )
}

export default MosaikkKunst
