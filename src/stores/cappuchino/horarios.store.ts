import { create } from 'zustand'
import {
  GroupScheduleItem,
  Day,
  SubjectGroup,
} from './../../models/degree-program.ts'

interface HorarioState {
  horario: { [key in Day]?: GroupScheduleItem[] }
  actualizarHorario: (group: SubjectGroup) => void
  limpiarHorario: () => void
}

export const useHorarioStore = create<HorarioState>((set) => ({
  horario: {},

  actualizarHorario: (group: SubjectGroup) =>
    set((state) => {
      const nuevoHorario = { ...state.horario }
      group.schedule.forEach((item) => {
        if (!nuevoHorario[item.day]) nuevoHorario[item.day] = []
        nuevoHorario[item.day]!.push(item)
      })
      return { horario: nuevoHorario }
    }),

  limpiarHorario: () => set({ horario: {} }),
}))
