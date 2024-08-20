import { Header } from './shared/ui/header/header'
import { HomePage } from './home/views/home'
import { DeleteModal } from './shared/ui/delete-modal/delete-modal'
import { useState } from 'react'

function App() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <Header />
      <HomePage />
      <button onClick={() => setModal(true)}></button>
      {modal && (
        <DeleteModal
          accept={() => setModal(false)}
          close={() => setModal(false)}
        />
      )}
    </>
  )
}

export default App
