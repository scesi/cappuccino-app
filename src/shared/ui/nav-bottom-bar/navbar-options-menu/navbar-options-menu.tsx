import { options } from './options'

import styles from './navbar-options-menu.module.css'

interface Props {
  isDropdownOpen: boolean
}

export const NavbarOptionsMenu = ({ isDropdownOpen = false }: Props) => {
  return (
    <div
      className={`${styles.dropdownOptions} ${isDropdownOpen ? styles.dropdownEnter : styles.dropdownExit}`}
    >
      <div className={styles.body}>
        {options.map((option) => (
          <button key={option.id} className={styles.buttonOption}>
            {option.label}
            <span className={styles.icon}>
              <option.icon />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
