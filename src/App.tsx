import { HomePage } from './home/views/home'
import { Header } from './shared/ui/header/header'
import { NavBar } from './ui/nav-bottom-bar'

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
