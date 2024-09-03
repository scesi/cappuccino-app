
import { combinedSchedule } from './shared/ui'
import { ScheduleTable } from './shared/ui'
import { Header } from './shared/ui/header/header'
import { HomePage } from './home/views/home'
import { NavBar, Header } from './shared/ui'

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
