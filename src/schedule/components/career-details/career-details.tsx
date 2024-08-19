import { SearchBar } from '@/shared/ui'
import { CareerDetailsProps } from './career-details-props.interface'

import styles from './career-details.module.css'

export function CareerDetails({ careerName, children }: CareerDetailsProps) {
  return (
    <article className={styles.careerDetails}>
      <header className={styles.careerDetailsHeader}>
        <h2 className={styles.carrerDetailsName}>{careerName}</h2>

        <SearchBar title="Busca por materia o docente"></SearchBar>
      </header>

      <section className={styles.careerDetailsSemesterList}>{children}</section>
    </article>
  )
}
