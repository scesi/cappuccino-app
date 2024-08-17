import { combinedSchedule } from './shared/ui'
import { ScheduleTable } from './shared/ui'
import { Header } from './shared/ui/header/header'
import { HomePage } from './home/views/home'

function App() {
  return (
    <>
      <Header />
      <ScheduleTable schedule={combinedSchedule} />
      <HomePage />
    </>
  )
}

export default App
