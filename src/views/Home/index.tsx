import logoCappuchino from '../../assets/logoCappuchino.svg'
import Card from '../../components/Card/Card'
import SearchBar from '../../components/Search-bar/Search-bar'

import styles from './Homepage.module.css'

const Homepage = () => {
  return (
    <>
      <section className={styles.welcome}>
        <h2 className={styles.subtitle2}>
          ¡Ponte cómodo y arma tu horario con un cappuchino!
        </h2>
        <img
          className={styles.logoCappuchino}
          src={logoCappuchino}
          alt="logo Cappuchino"
        />
      </section>
      <section className={styles.careers}>
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
