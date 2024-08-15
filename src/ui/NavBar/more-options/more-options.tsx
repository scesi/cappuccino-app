import SvgCalendarGoogle from '../icons-svg/google-calendar.svg'
import SvgPlusCircle from '../icons-svg/plus-circle.svg'
import SvgTrash from '../icons-svg/trash.svg'
import './more-options.css'

export const MoreOptions = () => {
  return (
    <div className="more-options">
      <div className="more-options-body">
        <div className="more-icon-button">
          Añadir al Calendario de Google
          <span>
            <button className="button-icon-more">
              <img src={SvgCalendarGoogle} alt="calendar google icon" />
            </button>
          </span>
        </div>
        <div className="more-icon-button">
          Agregar carrera
          <span>
            <button className="button-icon-more">
              <img src={SvgPlusCircle} alt="plus circle icon" />
            </button>
          </span>
        </div>
        <div className="more-icon-button">
          Eliminar materias seleccionadas
          <span>
            <button className="button-icon-more">
              <img src={SvgTrash} alt="trash icon" />
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}
