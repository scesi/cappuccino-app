import { SVGProps } from 'react'

import { Calendar } from '@/shared/ui/icons/calendar'
import { PlusCircle } from '@/shared/ui/icons/plus-circle'
import { Trash } from '@/shared/ui/icons/trash'

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
    icon: Calendar,
  },
  {
    id: 1,
    label: 'Agregar carrera',
    icon: PlusCircle,
  },
  {
    id: 2,
    label: 'Eliminar materias seleccionadas',
    icon: Trash,
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
