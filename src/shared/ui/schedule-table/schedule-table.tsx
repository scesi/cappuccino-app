import { useEffect, useState } from 'react'
import { Day, Schedule } from '../../../models/index'
import { formatHour } from './utils/time-formatter'
import { getHourIndex, getRowSpan } from './utils/schedule-utils'

const daysOfWeek = [Day.Lu, Day.Ma, Day.Mi, Day.Ju, Day.Vi, Day.Sa]

type ScheduleItem = Schedule & { subjectName: string; subjectCode: string }

interface Props {
  schedule: ScheduleItem[]
}

const SCHEDULE_HOURS = [
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

export const ScheduleTable = ({ schedule }: Props) => {
  const [intermediateHoursToDisplay, setIntermediateHoursToDisplay] = useState<
    string[]
  >([])

  const intermediateHours = SCHEDULE_HOURS.filter((_, idx) => idx % 2 !== 0)
  const visibleHours = SCHEDULE_HOURS.filter(
    (hour, idx) => intermediateHoursToDisplay.includes(hour) || idx % 2 === 0,
  )

  useEffect(() => {
    schedule.forEach((item) => {
      const startFormatted = formatHour(item.start)
      const endFormatted = formatHour(item.end)

      const newIntermediateHours = intermediateHours.filter(
        (hour) => startFormatted === hour || endFormatted === hour,
      )
      setIntermediateHoursToDisplay((prev) => prev.concat(newIntermediateHours))
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schedule])

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
        {visibleHours.map((hour, index) => (
          <tr key={hour}>
            <td>{hour}</td>
            {daysOfWeek.map((day) => (
              <ScheduleCell
                key={`${day}-${hour}`}
                day={day}
                hour={hour}
                scheduleItem={
                  schedule.find(
                    (item) =>
                      item.day === day &&
                      getHourIndex(item.start, SCHEDULE_HOURS) === index,
                  )!
                }
                isEmptyCell={schedule.some(
                  (item) =>
                    item.day === day &&
                    getHourIndex(item.start, SCHEDULE_HOURS) < index &&
                    getHourIndex(item.end, SCHEDULE_HOURS) > index,
                )}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

interface ScheduleCellProps {
  day: Day
  hour: string
  isEmptyCell: boolean
  scheduleItem: ScheduleItem
}

const ScheduleCell = ({
  day,
  hour,
  isEmptyCell,
  scheduleItem,
}: ScheduleCellProps) => {
  if (scheduleItem) {
    return (
      <td
        rowSpan={getRowSpan(
          scheduleItem.start,
          scheduleItem.end,
          SCHEDULE_HOURS,
        )}
      >
        <strong>{scheduleItem.subjectName}</strong> <br />
        {scheduleItem.room} <br />
        G:{scheduleItem.subjectCode} <br />
      </td>
    )
  }

  if (isEmptyCell) return null

  return <td key={`${day}-${hour}`}></td>
}
