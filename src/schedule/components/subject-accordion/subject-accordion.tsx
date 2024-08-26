import { useContext } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@/shared/ui/accordion'
import { AccordionContext } from '@/shared/ui/accordion/accordion-context'
import { SubjectAccordionProps } from './subject-accordion-props.interface'

import styles from './subject-accordion.module.css'
import { Group } from '../group/group'

function SubjectIconExpand() {
  const { expanded } = useContext(AccordionContext)

  return (
    <div className={styles.expandSubject}>
      <div className={styles.lineOne}></div>
      <div
        className={`${styles.lineTwo} ${expanded && styles.rotateExpand}`}
      ></div>
    </div>
  )
}

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
              <Group
                key={group.code}
                group={group}
                subjectId={subject.id}
              />
            ))}
          </ul>
        </section>
      </AccordionDetails>
    </Accordion>
  )
}
