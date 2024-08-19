export interface AccordionSummaryProps {
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
