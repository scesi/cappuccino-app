import { type SVGProps, useState } from 'react'

import {
  Book,
  CalendarEdit,
  CalendarEditActive,
  Coffee,
  CoffeeActive,
} from '@/shared/ui/icons'
import { NavbarOptionsMenu } from './navbar-options-menu/navbar-options-menu'

import styles from './nav-bottom-bar.module.css'

interface NavItem {
  id: number
  label: string
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactNode
  activeIcon: (props: SVGProps<SVGSVGElement>) => React.ReactNode
}

const navItems: NavItem[] = [
  {
    id: 0,
    label: 'Carrerras',
    icon: Book,
    activeIcon: Book,
  },
  {
    id: 1,
    label: 'Horario',
    icon: CalendarEdit,
    activeIcon: CalendarEditActive,
  },
  {
    id: 2,
    label: 'Más',
    icon: Coffee,
    activeIcon: CoffeeActive,
  },
]

export const NavBar = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(-1)
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
      <div className={styles.navBottomBar}>
        <div className={styles.buttons}>
          {navItems.map((button) => (
            <button
              key={button.id}
              className={`${styles.button} ${activeButtonIndex === button.id ? styles.active : ''}`}
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
      <NavbarOptionsMenu isDropdownOpen={isDropdownOpen} />
    </div>
  )
}
