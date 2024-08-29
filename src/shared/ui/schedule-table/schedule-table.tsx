import { useEffect, useState } from 'react'
import { formatHour } from './utils/time-formatter'
import { getHourIndex } from './utils/schedule-utils'
import { SCHEDULE_HOURS } from './utils/schedule-hours'
import { ScheduleCell } from './schedule-cell'
import { Day, Schedule } from '@/interfaces/degree-program.interface'

const daysOfWeek = [Day.Lu, Day.Ma, Day.Mi, Day.Ju, Day.Vi, Day.Sa]

type ScheduleItem = Schedule & { subjectName: string; subjectCode: string }

interface Props {
  schedule: ScheduleItem[]
}

export const ScheduleTable = ({ schedule }: Props) => {
  const [intermediateHoursToDisplay, setIntermediateHoursToDisplay] = useState<
    string[]
  >([])

  const intermediateHours = SCHEDULE_HOURS.filter((_, idx) => idx % 2 !== 0)
  const visibleHours = SCHEDULE_HOURS.filter(
    (hour, idx) => intermediateHoursToDisplay.includes(hour) || idx % 2 === 0,
  )

  const daysWithSchedules = daysOfWeek.filter((day) =>
    schedule.some((item) => item.day === day),
  )

  useEffect(() => {
    const hoursToShow: string[] = []

    schedule.forEach((item) => {
      const startFormatted = formatHour(item.start)
      const endFormatted = formatHour(item.end)

      const newIntermediateHours = intermediateHours.filter(
        (hour) => startFormatted === hour || endFormatted === hour,
      )

      hoursToShow.push(...newIntermediateHours)
    })

    const uniqueHoursToShow = Array.from(new Set(hoursToShow))

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
        {visibleHours.map((hour, index) => (
          <tr key={hour}>
            <td>{hour}</td>
            {daysOfWeek.map((day) => {
              const scheduleItem = schedule.find(
                (item) =>
                  item.day === day &&
                  getHourIndex(item.start, SCHEDULE_HOURS) === index,
              )!

              const isEmptyCell = schedule.some(
                (item) =>
                  item.day === day &&
                  getHourIndex(item.start, SCHEDULE_HOURS) < index &&
                  getHourIndex(item.end, SCHEDULE_HOURS) > index,
              )

              return (
                <ScheduleCell
                  key={`${day}-${hour}`}
                  day={day}
                  hour={hour}
                  scheduleItem={scheduleItem}
                  isEmptyCell={isEmptyCell}
                />
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
