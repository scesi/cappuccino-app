import { HomePage } from './pages/home/views/home'
import { NavBar, Header } from './components'

function App() {
  return (
    <>
      <div className="main-layout">
        <Header />
        <HomePage />
      </div>
      <NavBar />
    </>
  )
}

export default App
