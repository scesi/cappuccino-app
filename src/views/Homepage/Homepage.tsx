import logoCappuchino from '../../assets/logoCappuchino.svg'
import Card from '../../components/Card/Card'
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
      <section className="careers">
        <SearchBar title="Busca tu carrera" />
        <Card title="LICENCIATURA EN BIOLOGÍA" />
        <Card title="LICENCIATURA EN DIDACTICA DE LA FISICA" />
        <Card title="LICENCIATURA EN DIDACTICA DE LA MATEMATICA" />
        <Card title="LICENCIATURA EN FISICA" />
        <Card title="LICENCIATURA EN INGENIERIA CIVIL (NUEVO)" />
        <Card title="LICENCIATURA EN INGENIERIA DE ALIMENTOS" />
        <Card title="LICENCIATURA EN INGENIERIA DE SISTEMAS" />
        <Card title="LICENCIATURA EN INGENIERIA ELECTRICA" />
        <Card title="LICENCIATURA EN INGENIERIA ELECTROMECANICA" />
      </section>
    </>
  )
}

export default Homepage
