import { HomePage } from './home/views/home'
import ConfigurationPage from './pages/configuration-page/configuration-page'
import { NavBar, Header } from './shared/ui'

function App() {
  return (
    <>
      <div className="main-layout">
        <Header />
        <ConfigurationPage/>
      </div>
    </>
  )
}

export default App
