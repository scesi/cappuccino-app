import { Schedule } from './schedule.interface'

export interface Group {
  code: string
  schedule: Schedule[]
  teacher: string
}
