import SvgCalendarGoogle from '../icons-svg/google-calendar.svg'
import SvgPlusCircle from '../icons-svg/plus-circle.svg'
import SvgTrash from '../icons-svg/trash.svg'
import './dropdown-options.css'

const dropdownOptions = [
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
        {dropdownOptions.map((option) => (
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
