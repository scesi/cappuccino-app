import arrowIcon from '@/assets/icons/arrow-icon.svg'
import styles from './link-card.module.css'

export const LinkCard = ({ title }: { title: string }) => {
  return (
    <section className={styles.card}>
      <h3>{title}</h3>
      <img src={arrowIcon} alt="Arrow icon" />
    </section>
  )
}
