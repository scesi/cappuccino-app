import { useState } from 'react'

import { NavBar } from './ui/nav-bottom-bar/nav-bottom-bar'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
      recusandae tenetur eius, vero at eum voluptates obcaecati accusantium
      cupiditate sit commodi incidunt inventore debitis vel enim fugiat Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Nemo inventore
      doloremque dolor hic neque eligendi repellendus eum blanditiis deserunt
      cumque omnis libero consectetur tempora, quam temporibus. Saepe esse
      delectus laboriosam. recusandae tenetur eius, vero at eum voluptates
      obcaecati accusantium cupiditate sit commodi incidunt inventore debitis
      vel enim fugiat Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Nemo inventore doloremque dolor hic neque eligendi repellendus eum
      blanditiis deserunt cumque omnis libero consectetur tempora, quam
      temporibus. Saepe esse delectus laboriosam.
      <NavBar />
    </>
  )
}

export default App
