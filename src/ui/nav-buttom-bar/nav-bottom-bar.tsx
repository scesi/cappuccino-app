import { SVGProps, useState } from 'react'

import { NavbarOptionsMenu } from './navbar-options-menu/navbar-options-menu'
import { Book } from '@/shared/ui/icons/book'
import { CalendarEdit } from '@/shared/ui/icons/calendar-edit'
import { Coffe } from '@/shared/ui/icons/coffe'
import { CoffeeFull } from '@/shared/ui/icons/coffe-full'
import { CalendarEditActive } from '@/shared/ui/icons/calendar-edit-active'

import styles from './nav-bottom-bar.module.css'

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
    icon: Coffe,
    activeIcon: CoffeeFull,
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
      <div className={styles.navBottomBar}>
        <div className={styles.buttons}>
          {buttons.map((button) => (
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
