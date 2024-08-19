import { SVGProps, useState } from 'react'
import { DropdownOptions } from './dropdown-options/dropdown-options'
import { BookIcon } from '../../shared/ui/icons/careers'
import { CalendarEditIcon } from '../../shared/ui/icons/schedules'
import { CoffeIcon } from '../../shared/ui/icons/more'
import { CoffeeIconFull } from '../../shared/ui/icons/more-active'
import { CalendarEditIconActive } from '../../shared/ui/icons/schedules-active'
import style from './nav-bottom-bar.module.css'
interface Button {
  id: number
  label: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  activeIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element
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
    <div>
      <DropdownOptions isDropdownOpen={isDropdownOpen} />
      <div className={style.navBottomBar}>
        <div className={style.buttons}>
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`${style.button} ${activeButtonIndex === button.id ? style.active : ''}`}
              onClick={() => handleButtonClick(button.id)}
            >
              {activeButtonIndex === button.id
                ? button.activeIcon({ fill: '#000' })
                : button.icon({ fill: '#000' })}
              <span>{button.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
