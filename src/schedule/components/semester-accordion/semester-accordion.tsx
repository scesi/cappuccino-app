import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@/shared/ui/accordion'
import { SemesterAccordionProps } from './semester-accordion-props.interface'

import styles from './semester-accordion.module.css'

export function SemesterAccordion({
  semester,
  borrar,
}: SemesterAccordionProps) {
  return (
    <Accordion>
      <AccordionSummary>
        <div className={styles.semesterAccordion}>
          <h3 className={styles.semesterName}>{semester.name}</h3>

          <span className={styles.semesterArrowIcon}>
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4876 17.707L17.597 12L11.4876 6.29297L9.97388 7.70697L14.5696 12L9.97388 16.293L11.4876 17.707Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <section className={styles.semesterAccordionSubjects}>
          <p>{borrar}</p>
        </section>
      </AccordionDetails>
    </Accordion>
  )
}
