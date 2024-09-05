import { combinedSchedule, Header } from './shared/ui'
import { ScheduleTable } from './shared/ui'
import { HomePage } from './home/views/home'
import { NavBar } from './shared/ui'

function App() {
  return (
    <>
      <div className="main-layout">
        <Header />
        <ScheduleTable schedule={combinedSchedule} />
        <HomePage />
      </div>
      <NavBar />
    </>
  )
}

export default App
