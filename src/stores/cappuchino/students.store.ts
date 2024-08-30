import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

export interface GroupScheduleItem {
  day: Day;
  startHour: string;
  endHour: string;
  classroomName: string;
  isRegularClass: boolean;
  _duration: number;
  _teacherName: string;
}

export interface SubjectGroup {
  code: string;
  teacherName: string;
  schedule: GroupScheduleItem[];
}

export interface Subject {
  id: string;
  name: string;
  groups: SubjectGroup[];
}

export interface Semester {
  id: string;
  label: string;
  subjects: Subject[];
}

export interface DegreeProgram {
  id: string;
  name: string;
  semesters: Semester[];
}

export enum Day {
  Lu = 'LU',
  Ma = 'MA',
  Mi = 'MI',
  Ju = 'JU',
  Vi = 'VI',
  Sa = 'SA',
}

interface OrganizadorState {
  degreePrograms: DegreeProgram[];
  selectedDegreeProgram: DegreeProgram | null;
  selectedSemester: Semester | null;
  selectedSubject: Subject | null;
  selectedSubjectGroup: SubjectGroup | null;

  setDegreePrograms: (programs: DegreeProgram[]) => void;
  selectDegreeProgram: (program: DegreeProgram) => void;
  selectSemester: (semester: Semester) => void;
  selectSubject: (subject: Subject) => void;
  selectSubjectGroup: (group: SubjectGroup) => void;
}

type MyPersist = (
  config: StateCreator<OrganizadorState>,
  options: PersistOptions<OrganizadorState>
) => StateCreator<OrganizadorState>;

export const useOrganizadorStore = create<OrganizadorState>(
  (persist as MyPersist)(
    (set) => ({
      degreePrograms: [],  
      selectedDegreeProgram: null,
      selectedSemester: null,
      selectedSubject: null,
      selectedSubjectGroup: null,

      setDegreePrograms: (programs) => set({ degreePrograms: programs }),
      selectDegreeProgram: (program) => set(() => ({ selectedDegreeProgram: program, selectedSemester: null, selectedSubject: null, selectedSubjectGroup: null })),
      selectSemester: (semester) => set(() => ({ selectedSemester: semester, selectedSubject: null, selectedSubjectGroup: null })),
      selectSubject: (subject) => set(() => ({ selectedSubject: subject, selectedSubjectGroup: null })),
      selectSubjectGroup: (group) => set(() => ({ selectedSubjectGroup: group })),
    }),
    {
      name: 'organizador-storage',  
    }
  )
);
