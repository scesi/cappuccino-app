import { useState } from 'react'
import IconCarreras from '../../assets/Icons/icon-carreras.png'
import IconHorario from '../../assets/Icons/icon-horario.png'
import IconMas from '../../assets/Icons/icon-mas.png'
import './NavBar.css'

const NavBar = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null,
  )

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index)
  }

  return (
    <div className="nav-bar">
      <div className="nav-buttons bg-green-300">
        <button
          className={`button-icon ${activeButtonIndex === 0 ? 'active' : ''}`}
          onClick={() => handleButtonClick(0)}
        >
          <img src={IconCarreras} alt="icon description" />
          <span>Carreras</span>
        </button>
        <button
          className={`button-icon ${activeButtonIndex === 1 ? 'active' : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          <img src={IconHorario} alt="icon description" />
          <span>Horario</span>
        </button>
        <button
          className={`button-icon ${activeButtonIndex === 2 ? 'active' : ''}`}
          onClick={() => handleButtonClick(2)}
        >
          <img src={IconMas} alt="icon description" />
          <span>M&aacute;s</span>
        </button>
      </div>
    </div>
  )
}

export default NavBar
