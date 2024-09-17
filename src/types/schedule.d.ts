import { Schedule } from "@/interfaces/degree-program.interface"

export type ScheduleItem = Schedule & {
  subjectName: string
  subjectCode: string
}
