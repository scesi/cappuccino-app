import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@/shared/ui/accordion'
import { Semester } from '@/models/degree-program'
import { SubjectAccordion } from '../subject-accordion/subject-accordion'
import { ArrowDown } from '@/shared/ui/icons/arrow-down'

import styles from './semester-accordion.module.css'

interface SemesterAccordionProps {
  semester: Semester
}

export function SemesterAccordion({ semester }: SemesterAccordionProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDown />}
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
