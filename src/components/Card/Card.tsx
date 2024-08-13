import arrowIcon from '../../assets/arrowIcon.svg'

import styles from './Card.module.css'

const Card = ({ title }: { title: string }) => {
  return (
    <section className={styles.card}>
      <h3>{title}</h3>
      <img src={arrowIcon} alt="Arrow icon" />
    </section>
  )
}

export default Card
