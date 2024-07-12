import { Group } from './group.interface'

export interface Subject {
  code: string
  name: string
  groups: Group[]
}
