import { useContext, useEffect, useRef, useState } from 'react'
import { AccordionContext, AccordionContextValue } from './accordion-context'

export function useAccordionTransition<T extends HTMLElement>() {
  const { expanded, animationDuration } =
    useContext<AccordionContextValue>(AccordionContext)
  const [height, setHeight] = useState<number | 'auto'>(0)
  const contentRef = useRef<T>(null)

  useEffect(() => {
    const contentElement = contentRef.current

    if (contentElement) {
      let margin = 0
      if (contentElement.firstElementChild) {
        margin += parseFloat(
          getComputedStyle(contentElement.firstElementChild).marginBlockStart,
        )
      }

      if (contentElement.lastElementChild) {
        margin += parseFloat(
          getComputedStyle(contentElement.lastElementChild).marginBlockEnd,
        )
      }

      const currentContentHeight = contentElement.scrollHeight + margin
      setHeight(currentContentHeight)

      if (expanded) {
        setTimeout(() => setHeight('auto'), animationDuration ?? 220)
      } else {
        setTimeout(() => setHeight(0), 100)
      }
    }
  }, [expanded, animationDuration])

  return { height, contentRef, animationDuration }
}
