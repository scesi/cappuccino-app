import React from 'react'
import { Day, Schedule } from '../models/index'

interface ScheduleTableProps {
  schedule: (Schedule & { subjectName: string; subjectCode: string })[]
}

const hours = [
  '06:45',
  '07:30',
  '08:15',
  '09:00',
  '09:45',
  '10:30',
  '11:15',
  '12:00',
  '12:45',
  '13:30',
  '14:15',
  '15:00',
  '15:45',
  '16:30',
  '17:15',
  '18:00',
  '18:45',
  '19:30',
  '20:15',
  '21:00',
]

const daysOfWeek = [Day.Lu, Day.Ma, Day.Mi, Day.Ju, Day.Vi, Day.Sa]

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule }) => {
  /**
   * Obtiene el índice de la hora en la lista de horas.
   *
   * La función convierte una cadena de hora en formato `HHMM` (por ejemplo, `0645`) en un formato `HH:MM`
   * y luego busca el índice de esa hora en la lista de horas predefinida.
   *
   */
  const getHourIndex = (time: string) => {
    return hours.indexOf(`${time.slice(0, 2)}:${time.slice(2)}`)
  }

  /**
   * Calcula el número de filas que debe ocupar una celda en función de su rango horario.
   *
   * La función usa los índices de las horas de inicio y fin para determinar cuántas filas debe
   * abarcar una celda en la tabla.
   */
  const getRowSpan = (start: string, end: string) => {
    const startIndex = getHourIndex(start)
    const endIndex = getHourIndex(end)
    return endIndex - startIndex
  }

  /**
   * Renderiza una celda de horario en la tabla, con la capacidad de ajustar el `rowSpan`
   * en función del rango horario.
   *
   * La función busca el elemento del horario correspondiente para el día y la hora proporcionados,
   * y si se encuentra, renderiza una celda con la información de la materia, aula y duración.
   * Ajusta la celda para que ocupe el número adecuado de filas según el rango horario.
   * Si hay un horario en curso (donde la celda debería estar vacía), evita renderizar una celda vacía.
   *
   */
  const renderSchedule = (day: Day, hour: string, hourIndex: number) => {
    const scheduleItem = schedule.find(
      (item) => item.day === day && getHourIndex(item.start) === hourIndex,
    )

    if (scheduleItem) {
      return (
        <td
          key={`${day}-${hour}`}
          rowSpan={getRowSpan(scheduleItem.start, scheduleItem.end)}
        >
          <strong>{scheduleItem.subjectName}</strong> <br />
          {scheduleItem.room} <br />
        </td>
      )
    }

    // Si hay un horario en curso, no renderizar la celda vacía
    if (
      schedule.some(
        (item) =>
          item.day === day &&
          getHourIndex(item.start) < hourIndex &&
          getHourIndex(item.end) > hourIndex,
      )
    ) {
      return null
    }

    return <td key={`${day}-${hour}`}></td>
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {daysOfWeek.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {hours.map((hour, index) => (
          <tr key={hour}>
            <td>{hour}</td>
            {daysOfWeek.map((day) => renderSchedule(day, hour, index))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ScheduleTable
