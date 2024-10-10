import { useContext } from 'react'
import { AccordionContext } from '@/components/accordion/accordion-context'

import styles from './accordion-summary.module.css'

interface AccordionSummaryProps {
  expandIcon?: React.ReactNode
  children: React.ReactNode
  [key: string]:
    | React.ReactNode
    | number
    | boolean
    | string
    | undefined
    | object
}

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
