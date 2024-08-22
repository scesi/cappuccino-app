import { Day } from "@/models"

export const parseDay = (day: string): Day => {
  switch (day) {
    case 'LU':
      return Day.Lu
    case 'MA':
      return Day.Ma
    case 'MI':
      return Day.Mi
    case 'JU':
      return Day.Ju
    case 'VI':
      return Day.Vi
    case 'SA':
      return Day.Sa
    default:
      throw new Error(`Unknown day: ${day}`)
  }
}
