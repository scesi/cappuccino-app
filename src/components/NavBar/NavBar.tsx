import LogoCarreras from '../../assets/logos/logo-carreras.png'
import logoHorario from '../../assets/logos/logo-horario.png'
import logoMas from '../../assets/logos/logo-mas.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-buttons bg-green-300">
        <button className="button-icon">
          <img src={LogoCarreras} alt="logo description" />
          <span>Carreras</span>
        </button>
        <button className="button-icon">
          <img src={logoHorario} alt="logo description" />
          <span>Horario</span>
        </button>
        <button className="button-icon">
          <img src={logoMas} alt="logo description" />
          <span>M&aacute;s</span>
        </button>
      </div>
    </div>
  )
}

export default NavBar
