import { ScheduleItem } from '@/types/schedule'
import { ScheduleCell } from '../schedule-cell'
import { Day } from '@/interfaces/degree-program.interface'

interface RenderScheduleCellProps {
  day: Day
  hour: string
  scheduleItem: ScheduleItem,
  isEmptyCell: boolean
}

export const renderScheduleCell = ({
  day,
  hour,
  scheduleItem,
  isEmptyCell,
}: RenderScheduleCellProps) => {
  if (isEmptyCell) {
    return <td key={`${day}-${hour}`}></td>
  }

  return (
    <ScheduleCell
      key={`${day}-${hour}`}
      day={day}
      hour={hour}
      scheduleItem={scheduleItem}
      isEmptyCell={isEmptyCell}
    />
  )
}
