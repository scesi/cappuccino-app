import { combinedSchedule } from './shared/ui'
import { ScheduleTable } from './shared/ui'

function App() {
  return (
    <div className="App">
      <h1>Horario</h1>
      <ScheduleTable schedule={combinedSchedule} />
    </div>
  )
}

export default App
