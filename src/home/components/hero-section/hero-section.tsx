import logoCappuchino from '@/assets/logoCappuchino.svg'

import styles from './hero-section.module.css'

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <h2 className="subtitle-2">
        ¡Ponte cómodo y arma tu horario con un cappuchino!
      </h2>
      <img
        className={styles.logoCappuchino}
        src={logoCappuchino}
        alt="logo Cappuchino"
      />
    </section>
  )
}
