import { useContext } from 'react'
import { AccordionContext } from '@/shared/ui/accordion/accordion-context'
import { AccordionSummaryProps } from './accordion-summary-props.interface'

import styles from './accordion-summary.module.css'

export function AccordionSummary({
  children,
  expandIcon,
  ...props
}: AccordionSummaryProps) {
  const { toggle, expanded } = useContext<AccordionContext>(AccordionContext)

  return (
    <section className={styles.accordionSummary}>
      <button className={styles.accordionSummaryExpandButton} onClick={toggle}>
        <div {...props}>
          {children}

          {expandIcon && (
            <div
              className={`${styles.expandIcon} ${expanded !== 'disabled' && expanded && styles.rotate}`}
            >
              {expandIcon}
            </div>
          )}
        </div>
      </button>
    </section>
  )
}
