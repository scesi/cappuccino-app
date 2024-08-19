import { createContext } from 'react'

export interface AccordionContextValue {
  expanded: boolean
  toggle: () => void
  animationDuration?: number
}

export const AccordionContext = createContext<AccordionContextValue>({
  expanded: false,
  toggle: () => {},
})
