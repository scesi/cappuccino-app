import { create } from 'zustand';

interface Docente {
  nombre: string;
  grupo: number;
  aula: string;
  horarios: string[]; 
}

interface HorarioState {
  horario: { [key: string]: string[] }; 
  actualizarHorario: (docente: Docente) => void;
  limpiarHorario: () => void;
}

export const useHorarioStore = create<HorarioState>((set) => ({
  horario: {},  

  actualizarHorario: (docente: Docente) => set((state) => {
    const nuevoHorario = { ...state.horario };
    docente.horarios.forEach((horario) => {
      const dia = 'Aqui va un dia XD';  
      if (!nuevoHorario[dia]) nuevoHorario[dia] = [];
      nuevoHorario[dia].push(horario);
    });
    return { horario: nuevoHorario };
  }),

  limpiarHorario: () => set({ horario: {} }),
}));
