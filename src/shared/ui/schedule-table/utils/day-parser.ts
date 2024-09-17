import { Day } from '@/interfaces/degree-program.interface'

export const parseDay = (day: string): Day => {
  const DayMap: Record<string, Day> = {
    LU: Day.Lu,
    MA: Day.Ma,
    MI: Day.Mi,
    JU: Day.Ju,
    VI: Day.Vi,
    SA: Day.Sa,
  }
  const parseDay = DayMap[day]
  if (!parseDay) {
    throw new Error(`Unknown day: ${day}`)
  }
  return parseDay
}
