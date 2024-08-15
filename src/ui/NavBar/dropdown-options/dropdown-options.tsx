import SvgCalendarGoogle from '../icons-svg/google-calendar.svg'
import SvgPlusCircle from '../icons-svg/plus-circle.svg'
import SvgTrash from '../icons-svg/trash.svg'
import './dropdown-options.css'

export const DropdownOptions = () => {
  return (
    <div className="dropdown-options">
      <div className="dropdown-options-body">
        <div className="dropdown-option">
          Añadir al Calendario de Google
          <span>
            <button className="dropdown-button">
              <img src={SvgCalendarGoogle} alt="calendar google icon" />
            </button>
          </span>
        </div>
        <div className="dropdown-option">
          Agregar carrera
          <span>
            <button className="dropdown-button">
              <img src={SvgPlusCircle} alt="plus circle icon" />
            </button>
          </span>
        </div>
        <div className="dropdown-option">
          Eliminar materias seleccionadas
          <span>
            <button className="dropdown-button">
              <img src={SvgTrash} alt="trash icon" />
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}
