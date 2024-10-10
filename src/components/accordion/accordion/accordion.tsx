import { ReactNode, useState } from 'react'
import { AccordionContext } from '../accordion-context'

import styles from './accordion.module.css'

export function Accordion({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState<boolean | 'disabled'>('disabled')

  return (
    <AccordionContext.Provider
      value={{
        expanded,
        toggle: () => setExpanded(expanded === 'disabled' ? true : !expanded),
      }}
    >
      <article className={styles.accordion}>{children}</article>
    </AccordionContext.Provider>
  )
}
