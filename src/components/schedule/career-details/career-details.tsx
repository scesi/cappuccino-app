import { SearchBar } from '@/components'

import styles from './career-details.module.css'

interface CareerDetailsProps {
  careerName: string
  children: React.ReactNode
}

export function CareerDetails({ careerName, children }: CareerDetailsProps) {
  return (
    <section className={styles.careerDetails}>
      <header className={styles.careerDetailsHeader}>
        <h2 className={styles.carrerDetailsName}>{careerName}</h2>

        <SearchBar title="Busca por materia o docente"></SearchBar>
      </header>

      <section className={styles.careerDetailsSemesterList}>{children}</section>
    </section>
  )
}
