import { useState } from 'react'

import { NavbarOptionsMenu } from './navbar-options-menu/navbar-options-menu'
import { navItems } from './nav-items'

import styles from './nav-bottom-bar.module.css'

export const NavBar = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(-1)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState)
  }

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index)
    const activeNavItem = navItems[index]

    if (activeNavItem.id === 'options-menu') {
      toggleDropdown()
      return
    }

    setIsDropdownOpen(false)
  }

  return (
    <div>
      <div className={styles.navBottomBar}>
        <div className={styles.buttons}>
          {navItems.map((navItem, idx) => (
            <button
              key={navItem.id}
              className={`${styles.button} ${activeButtonIndex === idx ? styles.active : ''}`}
              onClick={() => handleButtonClick(idx)}
            >
              {activeButtonIndex === idx
                ? navItem.activeIcon({ fill: '#000' })
                : navItem.icon({ fill: '#000' })}
              <span>{navItem.label}</span>
            </button>
          ))}
        </div>
      </div>
      <NavbarOptionsMenu isDropdownOpen={isDropdownOpen} />
    </div>
  )
}
