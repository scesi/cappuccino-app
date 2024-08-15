import SvgCalendarGoogle from '../icons-svg/google-calendar.svg'
import SvgPlusCircle from '../icons-svg/plus-circle.svg'
import SvgTrash from '../icons-svg/trash.svg'
import './dropdown-options.css'

interface DropdownOption {
  id: number
  label: string
  icon: string
}

const options: DropdownOption[] = [
  {
    id: 0,
    label: 'Añadir al Calendario de Google',
    icon: SvgCalendarGoogle,
  },
  {
    id: 1,
    label: 'Agregar carrera',
    icon: SvgPlusCircle,
  },
  {
    id: 2,
    label: 'Eliminar materias seleccionadas',
    icon: SvgTrash,
  },
]

export const DropdownOptions = () => {
  return (
    <div className="dropdown-options">
      <div className="dropdown-options-body">
        {options.map((option) => (
          <div key={option.id} className="dropdown-option">
            {option.label}
            <span>
              <button className="dropdown-button">
                <img src={option.icon} alt="icon" />
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
