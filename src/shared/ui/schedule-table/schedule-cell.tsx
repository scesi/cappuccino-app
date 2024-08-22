import { Day, Schedule } from '@/models'
import { getRowSpan } from './utils/schedule-utils'
import { SCHEDULE_HOURS } from './utils/schedule-hours'

type ScheduleItem = Schedule & { subjectName: string; subjectCode: string }
interface ScheduleCellProps {
  day: Day
  hour: string
  isEmptyCell: boolean
  scheduleItem: ScheduleItem
}

export const ScheduleCell = ({
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
