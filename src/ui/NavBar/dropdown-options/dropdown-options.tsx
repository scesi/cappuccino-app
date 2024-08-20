import { SVGProps } from 'react'

import { CalendarIcon } from '../../../shared/ui/icons/google-calendar'
import { PlusCircleIcon } from '../../../shared/ui/icons/plus-circle'
import { TrashIcon } from '../../../shared/ui/icons/trash'

import styles from './dropdown-options.module.css'

interface DropdownOption {
  id: number
  label: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

const options: DropdownOption[] = [
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

type DropdownOptionsProps = {
  isDropdownOpen: boolean
}

export const DropdownOptions = ({
  isDropdownOpen = false,
}: DropdownOptionsProps) => {
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
