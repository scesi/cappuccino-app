import { HeroSection, LinkCard } from '@/pages/home/components'
import { CareerDetails, SemesterAccordion } from '@/components/schedule'
import { SearchBar } from '@/components'

import styles from './home-page.module.css'

export const HomePage = () => {
  return (
    <>
      <HeroSection />

      <CareerDetails careerName="INGENIERÍA DE SISTEMAS">
        <SemesterAccordion
          semester={{
            id: '1',
            label: 'Semestre 1 (Nivel A)',
            subjects: [
              {
                id: '1',
                name: 'INGLÉS I',
                groups: [
                  {
                    code: '1',
                    schedule: [],
                    teacherName: 'CESPEDES GUIZADA MARIA BENITA',
                  },
                  {
                    code: '2',
                    schedule: [],
                    teacherName: 'CESPEDES GUIZADA MARIA BENITA',
                  },
                  {
                    code: '3',
                    schedule: [],
                    teacherName: 'PEETERS ILONAA MAGDA LENA',
                  },
                  {
                    code: '4',
                    schedule: [],
                    teacherName: 'GRILO SALVATIERRA MARIA ESTELA',
                  },
                  {
                    code: '5',
                    schedule: [],
                    teacherName: 'CESPEDES GUIZADA MARIA BENITA',
                  },
                ],
              },
              {
                id: '2',
                name: 'FÍSICA GENERAL',
                groups: [],
              },
              {
                id: '3',
                name: 'INTRODUCCIÓN A LA PROGRAMACIÓN',
                groups: [],
              },
            ],
          }}
        ></SemesterAccordion>

        <SemesterAccordion
          semester={{
            id: '2',
            label: 'Semestre 2 (Nivel B)',
            subjects: [],
          }}
        ></SemesterAccordion>

        <SemesterAccordion
          semester={{
            id: '3',
            label: 'Semestre 3 (Nivel C)',
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
