import { ScheduleTable } from './components/Schedule/schedule-table'
import { HomePage } from './home/views/home'
import { NavBar, Header } from './shared/ui'

function App() {
  return (
    <>
      <div className="main-layout">
        <Header />
        <ScheduleTable/>
        <HomePage />
      </div>
      <NavBar />
    </>
  )
}

export default App
