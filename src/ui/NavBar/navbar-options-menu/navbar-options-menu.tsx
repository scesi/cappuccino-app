import { SVGProps } from 'react'

import { CalendarIcon } from '../../../shared/ui/icons/google-calendar'
import { PlusCircleIcon } from '../../../shared/ui/icons/plus-circle'
import { TrashIcon } from '../../../shared/ui/icons/trash'

import styles from './navbar-options-menu.module.css'

interface NavbarOptionMenu {
  id: number
  label: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

const options: NavbarOptionMenu[] = [
  {
    id: 0,
    label: 'Añadir al Calendario de Google',
    icon: CalendarIcon,
  },
  {
    id: 1,
    label: 'Agregar carrera',
    icon: PlusCircleIcon,
  },
  {
    id: 2,
    label: 'Eliminar materias seleccionadas',
    icon: TrashIcon,
  },
]

type NavbarOptionsMenuProps = {
  isDropdownOpen: boolean
}

export const NavbarOptionsMenu = ({
  isDropdownOpen = false,
}: NavbarOptionsMenuProps) => {
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
