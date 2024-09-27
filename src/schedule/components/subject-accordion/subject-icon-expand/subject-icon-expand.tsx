import { useContext } from 'react'
import { AccordionContext } from '@/shared/ui/accordion/accordion-context'

import styles from './subject-icon-expand.module.css'

export function SubjectIconExpand() {
  const { expanded } = useContext(AccordionContext)

  return (
    <div className={styles.expandSubject}>
      <div className={styles.lineOne}></div>
      <div
        className={`${styles.lineTwo} ${expanded !== 'disabled' && expanded && styles.rotateExpand}`}
      ></div>
    </div>
  )
}
