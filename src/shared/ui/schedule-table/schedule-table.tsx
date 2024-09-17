import { useEffect, useMemo, useState } from 'react'
import { formatHour } from './utils/time-formatter'
import { getHourIndex } from './utils/schedule-utils'
import { SCHEDULE_HOURS } from './utils/schedule-hours'
import { Day, ScheduleProps } from '@/interfaces/degree-program.interface'
import { renderScheduleCell } from './utils/cell-render'

const daysOfWeek = [Day.Lu, Day.Ma, Day.Mi, Day.Ju, Day.Vi, Day.Sa]

export const ScheduleTable = ({ schedule }: ScheduleProps) => {
  const [intermediateHoursToDisplay, setIntermediateHoursToDisplay] = useState<
    string[]
  >([])

  const intermediateHours = useMemo(() => {
    return SCHEDULE_HOURS.filter((_, idx) => idx % 2 !== 0)
  }, [SCHEDULE_HOURS])

  const visibleHours = useMemo(() => {
    return SCHEDULE_HOURS.filter(
      (hour, idx) => intermediateHoursToDisplay.includes(hour) || idx % 2 === 0,
    )
  }, [SCHEDULE_HOURS, intermediateHoursToDisplay])

  const daysWithSchedules = useMemo(() => {
    return daysOfWeek.filter((day) => schedule.some((item) => item.day === day))
  }, [schedule])

  useEffect(() => {
    const hoursToShow = new Set<string>()

    schedule.forEach((item) => {
      const startFormatted = formatHour(item.start)
      const endFormatted = formatHour(item.end)

      intermediateHours.forEach((hour) => {
        if (startFormatted === hour || endFormatted === hour) {
          hoursToShow.add(hour)
        }
      })
    })
    const uniqueHoursToShow = Array.from(hoursToShow)

    // Solo actualiza el estado si las horas calculadas son diferentes de las actuales
    if (
      JSON.stringify(uniqueHoursToShow) !==
      JSON.stringify(intermediateHoursToDisplay)
    ) {
      setIntermediateHoursToDisplay(uniqueHoursToShow)
    }
  }, [schedule])

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {daysWithSchedules.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {visibleHours.map((hour) => (
          <tr key={hour}>
            <td>{hour}</td>
            {daysOfWeek.map((day) => {
              const scheduleItem = schedule.find(
                (item) =>
                  item.day === day &&
                  getHourIndex(item.start, SCHEDULE_HOURS) ===
                    getHourIndex(hour, SCHEDULE_HOURS),
              )!

              const isEmptyCell = schedule.some(
                (item) =>
                  item.day === day &&
                  getHourIndex(item.start, SCHEDULE_HOURS) <
                    getHourIndex(hour, SCHEDULE_HOURS) &&
                  getHourIndex(item.end, SCHEDULE_HOURS) >
                    getHourIndex(hour, SCHEDULE_HOURS),
              )

              return renderScheduleCell({
                day,
                hour,
                scheduleItem,
                isEmptyCell,
              })
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
