import { useState } from 'react'
import { BookIcon } from '../../shared/ui/icons/careers'
import { CalendarEditIcon } from '../../shared/ui/icons/schedules'
import { CoffeIcon } from '../../shared/ui/icons/more'
import { CoffeeIconFull } from '../../shared/ui/icons/more-active'
import { CalendarEditIconActive } from '../../shared/ui/icons/schedules-active'
import { DropdownOptions } from './dropdown-options/dropdown-options'
import './nav-bottom-bar.css'
interface Button {
  id: number
  label: string
  icon: any
  activeIcon: any
}

const buttons: Button[] = [
  {
    id: 0,
    label: 'Carrerras',
    icon: BookIcon,
    activeIcon: BookIcon,
  },
  {
    id: 1,
    label: 'Horario',
    icon: CalendarEditIcon,
    activeIcon: CalendarEditIconActive,
  },
  {
    id: 2,
    label: 'Más',
    icon: CoffeIcon,
    activeIcon: CoffeeIconFull,
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
