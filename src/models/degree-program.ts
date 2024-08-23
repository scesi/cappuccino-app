export interface DegreeProgram {
  id: string // code
  name: string
  semesters: Semester[]
}

export interface Semester {
  id: string // UUID
  label: string // code
  subjects: Subject[]
}

export interface Subject {
  id: string // code
  name: string
  groups: SubjectGroup[]
}

export interface SubjectGroup {
  code: string
  teacherName: string // teacher
  schedule: GroupScheduleItem[]
}

export interface GroupScheduleItem {
  day: Day
  startHour: string // start: TODO: Format 06:45, 09:45 (645)
  endHour: string // end: TODO: Format 06:45, 09:45 (645)
  classroomName: string // room 620, 690B
  isRegularClass: boolean // isClass

  // por considerar
  _duration: number // 1 | 2
  _teacherName: string // teacher
}

export enum Day {
  Lu = 'LU',
  Ma = 'MA',
  Mi = 'MI',
  Ju = 'JU',
  Vi = 'VI',
  Sa = 'SA',
}
