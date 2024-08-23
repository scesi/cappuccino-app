export interface DegreeProgram {
  code: string
  levels: Level[]
  semester: string
  name: string
}

export interface Level {
  code: string
  subjects: Subject[]
}

export interface Subject {
  code: string
  name: string
  groups: Group[]
}

export interface Group {
  code: string
  schedule: Schedule[]
  teacher: string
}

export interface Schedule {
  day: Day
  start: string
  end: string
  duration: number
  room: string
  isClass: boolean
  teacher: string
}

export enum Day {
  Lu = 'LU',
  Ma = 'MA',
  Mi = 'MI',
  Ju = 'JU',
  Vi = 'VI',
  Sa = 'SA',
}
