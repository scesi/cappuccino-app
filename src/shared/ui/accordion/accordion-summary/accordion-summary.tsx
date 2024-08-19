import { useContext } from 'react'
import { AccordionContext } from '@/shared/ui/accordion/accordion-context'

import styles from './accordion-summary.module.css'

export function AccordionSummary({ textValue }: { textValue: string }) {
  const { toggle } = useContext(AccordionContext)

  return (
    <section
      className={styles.accordionSummary}
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <button className={styles.accordionSummaryLabel} onClick={toggle}>{textValue}</button>
    </section>
  )
}
