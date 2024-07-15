import './App.css'
import ScheduleTable from './components/ScheduleTable'
import { Day, Schedule } from './models'

const sampleSchedule: Schedule[] = [
  {
    day: Day.Lu,
    start: '1200',
    end: '1415',
    duration: 3,
    room: '608A',
    isClass: false,
    teacher: 'FERNANDEZ TERRAZAS ERIKA',
  },
  {
    day: Day.Ma,
    start: '1700',
    end: '1030',
    duration: 3,
    room: '614',
    isClass: false,
    teacher: 'ALFARO DENUS GONZALO',
  },
  {
    day: Day.Mi,
    start: '0800',
    end: '1030',
    duration: 3,
    room: '614',
    isClass: false,
    teacher: 'ALFARO DENUS GONZALO',
  },
]
function App() {
  return (
    <>
      <div className="App">
        <h1>Schedule</h1>
        <ScheduleTable schedule={sampleSchedule} />
      </div>
    </>
  )
}

export default App
