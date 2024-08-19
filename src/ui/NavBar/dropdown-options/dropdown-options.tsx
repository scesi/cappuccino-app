import { SVGProps } from 'react'
import { CalendarIcon } from '../../../shared/ui/icons/google-calendar'
import { PlusCircleIcon } from '../../../shared/ui/icons/plus-circle'
import { TrashIcon } from '../../../shared/ui/icons/trash'
import style from './dropdown-options.module.css'

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
    <div className={style.dropdownOptions}>
      <div className={style.body}>
        {options.map((option) => (
          <button key={option.id} className={style.buttonOption}>
            {option.label}
            <span className={style.icon}>
              <option.icon />
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
