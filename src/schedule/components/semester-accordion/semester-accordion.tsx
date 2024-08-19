import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@/shared/ui/accordion'
import { SemesterAccordionProps } from './semester-accordion-props.interface'
import { SubjectAccordion } from '../subject-accordion/subject-accordion'

import styles from './semester-accordion.module.css'

export function SemesterAccordion({ semester }: SemesterAccordionProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.43 0.292969L6.82052 4.58597L2.21105 0.292969L0.69281 1.70697L6.82052 7.41397L12.9482 1.70697L11.43 0.292969Z"
              fill="black"
            />
          </svg>
        }
        className={styles.semesterAccordion}
      >
        <h3 className={styles.semesterName}>{semester.label}</h3>
      </AccordionSummary>

      <AccordionDetails>
        <section className={styles.subjectsContainer}>
          <section className={styles.semesterAccordionSubjects}>
            {semester.subjects.map((subject) => (
              <SubjectAccordion
                key={subject.id}
                subject={subject}
              ></SubjectAccordion>
            ))}
          </section>
        </section>
      </AccordionDetails>
    </Accordion>
  )
}
