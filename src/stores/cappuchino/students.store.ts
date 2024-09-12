import { create, StateCreator } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'
import {
  Semester,
  DegreeProgram,
  Subject,
  SubjectGroup,
} from './../../models/degree-program.ts'

interface OrganizadorState {
  degreePrograms: DegreeProgram[]
  selectedDegreeProgram: DegreeProgram | null
  selectedSemester: Semester | null
  selectedSubject: Subject | null
  selectedSubjectGroup: SubjectGroup | null

  setDegreePrograms: (programs: DegreeProgram[]) => void
  selectDegreeProgram: (program: DegreeProgram) => void
  selectSemester: (semester: Semester) => void
  selectSubject: (subject: Subject) => void
  selectSubjectGroup: (group: SubjectGroup) => void
}

type MyPersist = (
  config: StateCreator<OrganizadorState>,
  options: PersistOptions<OrganizadorState>,
) => StateCreator<OrganizadorState>

export const useOrganizadorStore = create<OrganizadorState>(
  (persist as MyPersist)(
    (set) => ({
      degreePrograms: [],
      selectedDegreeProgram: null,
      selectedSemester: null,
      selectedSubject: null,
      selectedSubjectGroup: null,

      setDegreePrograms: (programs) => set({ degreePrograms: programs }),
      selectDegreeProgram: (program) =>
        set(() => ({
          selectedDegreeProgram: program,
          selectedSemester: null,
          selectedSubject: null,
          selectedSubjectGroup: null,
        })),
      selectSemester: (semester) =>
        set(() => ({
          selectedSemester: semester,
          selectedSubject: null,
          selectedSubjectGroup: null,
        })),
      selectSubject: (subject) =>
        set(() => ({ selectedSubject: subject, selectedSubjectGroup: null })),
      selectSubjectGroup: (group) =>
        set(() => ({ selectedSubjectGroup: group })),
    }),
    {
      name: 'organizador-storage',
    },
  ),
)
