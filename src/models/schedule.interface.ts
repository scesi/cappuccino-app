import { Day } from './day.enum'

export interface Schedule {
  day: Day
  start: string
  end: string
  duration: number
  room: string
  isClass: boolean
  teacher: string
}
