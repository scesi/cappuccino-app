import { HeroSection, LinkCard } from '@/home/components'

import { SearchBar } from '@/shared/ui'

import styles from './home-page.module.css'
import { CareerDetails, SemesterAccordion } from '@/schedule/components'

export const HomePage = () => {
  return (
    <>
      <HeroSection />

      <CareerDetails careerName="INGENIERÍA DE SISTEMAS">
        <SemesterAccordion
          semester={{
            name: 'Semestre 1 (Nivel A)',
            subjects: [],
          }}
        ></SemesterAccordion>

        <SemesterAccordion
          semester={{
            name: 'Semestre 2 (Nivel B)',
            subjects: [],
          }}
        ></SemesterAccordion>

        <SemesterAccordion
          semester={{
            name: 'Semestre 3 (Nivel C)',
            subjects: [],
          }}
        ></SemesterAccordion>
      </CareerDetails>

      <section className={styles.careers}>
        <SearchBar title="Busca tu carrera" />
        <LinkCard title="LICENCIATURA EN BIOLOGÍA" />
        <LinkCard title="LICENCIATURA EN DIDACTICA DE LA FISICA" />
        <LinkCard title="LICENCIATURA EN DIDACTICA DE LA MATEMATICA" />
        <LinkCard title="LICENCIATURA EN FISICA" />
        <LinkCard title="LICENCIATURA EN INGENIERIA CIVIL (NUEVO)" />
        <LinkCard title="LICENCIATURA EN INGENIERIA DE ALIMENTOS" />
        <LinkCard title="LICENCIATURA EN INGENIERIA DE SISTEMAS" />
        <LinkCard title="LICENCIATURA EN INGENIERIA ELECTRICA" />
        <LinkCard title="LICENCIATURA EN INGENIERIA ELECTROMECANICA" />
      </section>
    </>
  )
}
