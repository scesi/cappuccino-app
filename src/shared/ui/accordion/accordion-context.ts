import { createContext } from 'react'

export interface AccordionContext {
  expanded: boolean | 'disabled'
  toggle: () => void
  animationDuration?: number
}

export const AccordionContext = createContext<AccordionContext>({
  expanded: false,
  toggle: () => {},
})
