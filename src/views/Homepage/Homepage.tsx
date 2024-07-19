import logoCappuchino from '../../assets/logoCappuchino.svg'
import SearchBar from '../../components/Search-bar/Search-bar'

import './Homepage.css'

const Homepage = () => {
  return (
    <>
      <section className="welcome">
        <h2 className="subtitle2">
          ¡Ponte cómodo y arma tu horario con un cappuchino!
        </h2>
        <img
          className="logoCappuchino"
          src={logoCappuchino}
          alt="logo Cappuchino"
        />
      </section>
      <section className='careers'>
        <SearchBar />
      </section>
    </>
  )
}

export default Homepage
