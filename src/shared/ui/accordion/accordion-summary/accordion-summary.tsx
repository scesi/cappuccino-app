import { useContext } from 'react'
import { AccordionContext } from '@/shared/ui/accordion/accordion-context'

import styles from './accordion-summary.module.css'
import { AccordionSummaryProps } from './accordion-summary-props.interface'

export function AccordionSummary({
  children,
  expandIcon,
  ...props
}: AccordionSummaryProps) {
  const { toggle, expanded } = useContext(AccordionContext)

  return (
    <section className={styles.accordionSummary}>
      <button className={styles.accordionSummaryLabel} onClick={toggle}>
        <div {...props}>
          {children}

          {expandIcon && (
            <div
              className={`${styles.expandIcon} ${expanded && styles.rotate}`}
            >
              {expandIcon}
            </div>
          )}
        </div>
      </button>
    </section>
  )
}
