import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@/shared/ui/accordion'
import { SubjectAccordionProps } from './subject-accordion-props.interface'

import styles from './subject-accordion.module.css'
import { Group } from '../group/group'
import { SubjectIconExpand } from './subject-icon-expand/subject-icon-expand'

export function SubjectAccordion({ subject }: SubjectAccordionProps) {
  return (
    <Accordion key={subject.id}>
      <AccordionSummary className={styles.subjectNameContainer}>
        <h4 className={styles.subjectName}>{subject.name}</h4>

        <SubjectIconExpand />
      </AccordionSummary>

      <AccordionDetails>
        <section className={styles.groupsContainer}>
          <ul className={styles.groups}>
            {subject.groups.map((group) => (
              <Group key={group.code} group={group} subjectId={subject.id} />
            ))}
          </ul>
        </section>
      </AccordionDetails>
    </Accordion>
  )
}
