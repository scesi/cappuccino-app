import { SVGProps } from 'react'
import { CalendarIcon } from '../../../shared/ui/icons/google-calendar'
import { PlusCircleIcon } from '../../../shared/ui/icons/plus-circle'
import { TrashIcon } from '../../../shared/ui/icons/trash'

import './dropdown-options.css'

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

export const DropdownOptions = () => {
  return (
    <div className="dropdown-options">
      <div className="dropdown-options-body">
        {options.map((option) => (
          <button key={option.id} className="dropdown-option">
            {option.label}
            <span className="dropdown-button">
              <option.icon />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
