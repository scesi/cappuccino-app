import React from 'react';
import { Day, Schedule } from '../models/index';

interface ScheduleTableProps {
  schedule: Schedule[];
}

const hours = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 
  '18:00', '19:00', '20:00'
];

const daysOfWeek = [Day.Lu, Day.Ma, Day.Mi, Day.Ju, Day.Vi, Day.Sa];

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule }) => {
  const renderSchedule = (day: Day, hour: string) => {
    const scheduleItem = schedule.find(
      (item) => item.day === day && item.start === hour.replace(':', '')
    );

    if (scheduleItem) {
      return (
        <td key={`${day}-${hour}`}>
          {scheduleItem.room} <br />
          {scheduleItem.teacher} <br />
          ({scheduleItem.start}-{scheduleItem.end})
        </td>
      );
    }

    return <td key={`${day}-${hour}`}></td>;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Hours</th>
          {daysOfWeek.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {hours.map((hour) => (
          <tr key={hour}>
            <td>{hour}</td>
            {daysOfWeek.map((day) => renderSchedule(day, hour))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;
