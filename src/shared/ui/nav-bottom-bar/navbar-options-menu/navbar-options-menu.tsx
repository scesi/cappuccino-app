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
      <ul className={styles.body} role="menu">
        {options.map((option) => (
          <li key={option.id}>
            <button className={styles.buttonOption}>
              {option.label}
              <span className={styles.icon}>
                <option.icon />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
