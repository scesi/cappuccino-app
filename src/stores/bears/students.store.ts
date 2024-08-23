import { create, StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface Docente {
  nombre: string;
  grupo: number;
  aula: string;
  horarios: string[]; 
}

interface Materia {
  nombre: string;
  docentes: Docente[];
}

interface Semestre {
  numero: number;
  materias: Materia[];
}

interface Carrera {
  nombre: string;
  semestres: Semestre[];
}

interface OrganizadorState {
  carreras: Carrera[];
  carreraSeleccionada: Carrera | null;
  semestreSeleccionado: Semestre | null;
  materiaSeleccionada: Materia | null;
  docenteSeleccionado: Docente | null;

  seleccionarCarrera: (carrera: Carrera) => void;
  seleccionarSemestre: (semestre: Semestre) => void;
  seleccionarMateria: (materia: Materia) => void;
  seleccionarDocente: (docente: Docente) => void;
}

type MyPersist = (
  config: StateCreator<OrganizadorState>,
  options: PersistOptions<OrganizadorState>
) => StateCreator<OrganizadorState>;

export const useOrganizadorStore = create<OrganizadorState>(
  (persist as MyPersist)(
    (set) => ({
      carreras: [],  
      carreraSeleccionada: null,
      semestreSeleccionado: null,
      materiaSeleccionada: null,
      docenteSeleccionado: {nombre:"Lucio", grupo:2, aula: "689 B", horarios: []},

      seleccionarCarrera: (carrera) => set(() => ({ carreraSeleccionada: carrera, semestreSeleccionado: null, materiaSeleccionada: null, docenteSeleccionado: null })),
      seleccionarSemestre: (semestre) => set(() => ({ semestreSeleccionado: semestre, materiaSeleccionada: null, docenteSeleccionado: null })),
      seleccionarMateria: (materia) => set(() => ({ materiaSeleccionada: materia, docenteSeleccionado: null })),
      seleccionarDocente: (docente) => set(() => ({ docenteSeleccionado: docente })),
    }),
    {
      name: 'organizador-storage',  
    }
  )
);
