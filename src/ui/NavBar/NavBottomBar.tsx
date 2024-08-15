import { useState } from 'react'
import './NavBottomBar.css'

import SvgCareers from './IconsSvg/careers.svg'
import SvgSchedules from './IconsSvg/schedules.svg'
import SvgMore from './IconsSvg/more.svg'
import SvgSchedulesActive from './IconsSvg/schedules-active.svg'
import SvgMoreActive from './IconsSvg/more-active.svg'

const buttons = [
  { id: 0, label: 'Careers', icon: SvgCareers, activeIcon: SvgCareers },
  {
    id: 1,
    label: 'Schedules',
    icon: SvgSchedules,
    activeIcon: SvgSchedulesActive,
  },
  { id: 2, label: 'More', icon: SvgMore, activeIcon: SvgMoreActive },
]

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
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`button-icon ${activeButtonIndex === button.id ? 'active' : ''}`}
            onClick={() => handleButtonClick(button.id)}
          >
            <img
              src={
                activeButtonIndex === button.id
                  ? button.activeIcon
                  : button.icon
              }
              alt={`${button.label} icon`}
            />
            <span>{button.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default NavBar
