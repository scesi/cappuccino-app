import { useState } from 'react'
import './nav-bottom-bar.css'

import SvgCareers from './icons-svg/careers.svg'
import SvgSchedules from './icons-svg/schedules.svg'
import SvgMore from './icons-svg/more.svg'
import SvgSchedulesActive from './icons-svg/schedules-active.svg'
import SvgMoreActive from './icons-svg/more-active.svg'
import { DropdownOptions } from './dropdown-options/dropdown-options'

interface Button {
  id: number
  label: string
  icon: string
  activeIcon: string
}

const buttons: Button[] = [
  {
    id: 0,
    label: 'Carrerras',
    icon: SvgCareers,
    activeIcon: SvgCareers,
  },
  {
    id: 1,
    label: 'Horario',
    icon: SvgSchedules,
    activeIcon: SvgSchedulesActive,
  },
  {
    id: 2,
    label: 'Más',
    icon: SvgMore,
    activeIcon: SvgMoreActive,
  },
]

export const NavBar = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(
    null,
  )
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState)
  }

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index)
    if (index === 2) {
      toggleDropdown()
    } else {
      setIsDropdownOpen(false)
    }
  }

  return (
    <div className="nav-bar-options">
      <div
        className={`dropdown-container ${isDropdownOpen ? 'dropdown-enter-active' : 'dropdown-exit-active'}`}
      >
        {isDropdownOpen && <DropdownOptions />}
      </div>
      <div className="nav-bar-bottom">
        <div className="nav-buttons">
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
    </div>
  )
}
