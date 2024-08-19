import { ReactNode, useContext } from 'react'
import { AccordionContext } from '@/shared/ui/accordion/accordion-context'

import styles from './accordion-summary.module.css'

export function AccordionSummary({ children }: { children: ReactNode }) {
  const { toggle } = useContext(AccordionContext)

  return (
    <section className={styles.accordionSummary}>
      <button className={styles.accordionSummaryLabel} onClick={toggle}>
        {children}
      </button>
    </section>
  )
}
