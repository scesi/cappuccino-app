import { useState } from 'react'
import './NavBottomBar.css'

import SvgCareers from './IconsSvg/careers.svg'
import SvgSchedules from './IconsSvg/schedules.svg'
import SvgMore from './IconsSvg/more.svg'
import SvgSchedulesActive from './IconsSvg/schedules-active.svg'
import SvgMoreActive from './IconsSvg/more-active.svg'

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
          <img src={SvgCareers} alt="carreras option" />
          <span>Carreras</span>
        </button>
        <button
          className={`button-icon ${activeButtonIndex === 1 ? 'active' : ''}`}
          onClick={() => handleButtonClick(1)}
        >
          <img
            src={activeButtonIndex === 1 ? SvgSchedulesActive : SvgSchedules}
            alt="icon description"
          />
          <span>Horario</span>
        </button>
        <button
          className={`button-icon ${activeButtonIndex === 2 ? 'active' : ''}`}
          onClick={() => handleButtonClick(2)}
        >
          <img
            src={activeButtonIndex === 2 ? SvgMoreActive : SvgMore}
            alt="icon description"
          />
          <span>M&aacute;s</span>
        </button>
      </div>
    </div>
  )
}

export default NavBar
