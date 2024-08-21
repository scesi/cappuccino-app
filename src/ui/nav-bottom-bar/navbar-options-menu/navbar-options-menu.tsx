import type { SVGProps } from 'react'

import { Calendar, PlusCircle, Trash } from '@/shared/ui/icons'

import styles from './navbar-options-menu.module.css'

interface NavbarOptionMenuItem {
  id: number
  label: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

const options: NavbarOptionMenuItem[] = [
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
