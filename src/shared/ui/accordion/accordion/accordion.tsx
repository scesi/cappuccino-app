import { ReactNode, useState } from 'react'
import { AccordionContext } from '../accordion-context'

import styles from './accordion.module.css'

export function Accordion({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <AccordionContext.Provider
      value={{ expanded, toggle: () => setExpanded(!expanded) }}
    >
      <article className={styles.accordion}>{children}</article>
    </AccordionContext.Provider>
  )
}
