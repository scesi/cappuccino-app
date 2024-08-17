import { useEffect, useState } from 'react'
import { Day, Schedule } from '../../../models/index'
import { formatHour } from './utils/time-formatter';
import { getHourIndex, getRowSpan } from './utils/schedule-utils';

const daysOfWeek = [Day.Lu, Day.Ma, Day.Mi, Day.Ju, Day.Vi, Day.Sa]

interface Props {
  schedule: (Schedule & { subjectName: string; subjectCode: string })[]
}

export const ScheduleTable = ({ schedule }: Props) => {
  const [intermediateHoursToShow, setIntermediateHoursToShow] = useState<
    Set<string>
  >(new Set())

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

  const filteredHours = hours.filter(
    (hour, idx) => intermediateHoursToShow.has(hour) || idx % 2 === 0,
  )

  useEffect(() => {
    const intermediateHours = hours.filter((_, idx) => idx % 2 !== 0)
    const hoursSet = new Set<string>()

    schedule.forEach((item) => {
      const startFormatted = formatHour(item.start)
      const endFormatted = formatHour(item.end)
      hoursSet.add(startFormatted)
      hoursSet.add(endFormatted)

      intermediateHours.forEach((hour) => {
        if (hoursSet.has(hour)) {
          setIntermediateHoursToShow((prev) => new Set(prev).add(hour))
        }
      })
    })
  }, [schedule])

  const renderSchedule = (day: Day, hour: string, hourIndex: number) => {
    const scheduleItem = schedule.find(
      (item) =>
        item.day === day && getHourIndex(item.start, hours) === hourIndex,
    )

    if (scheduleItem) {
      return (
        <td
          key={`${day}-${hour}`}
          rowSpan={getRowSpan(scheduleItem.start, scheduleItem.end, hours)}
        >
          <strong>{scheduleItem.subjectName}</strong> <br />
          {scheduleItem.room} <br />
          G:{scheduleItem.subjectCode} <br />
        </td>
      )
    }

    if (
      schedule.some(
        (item) =>
          item.day === day &&
          getHourIndex(item.start, hours) < hourIndex &&
          getHourIndex(item.end, hours) > hourIndex,
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
        {filteredHours.map((hour, index) => (
          <tr key={hour}>
            <td>{hour}</td>
            {daysOfWeek.map((day) => renderSchedule(day, hour, index))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
