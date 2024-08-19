import { ReactNode } from 'react'
import { useAccordionTransition } from '../useAccordionTransition'

import styles from './accordion-details.module.css'

export function AccordionDetails({ children }: { children: ReactNode }) {
  const { contentRef, height, animationDuration } =
    useAccordionTransition<HTMLDivElement>()

  return (
    <section
      className={styles.accordionDetails}
      style={{
        transition: `height ${animationDuration ?? 220}ms`,
        height,
      }}
    >
      <div ref={contentRef}>{children}</div>
    </section>
  )
}
