import ThreeDots from '../Three-dots/Three-dots'

import logoSCESI from '../../assets/logoSCESI-Normal.svg'
import './Header.css'

const Header = () => {
  return (
    <header>
      <img className="logoscesi" src={logoSCESI} alt="logo scesi" />
      <h1 className="title">CAPPUCHINO</h1>
      <ThreeDots></ThreeDots>
    </header>
  )
}

export default Header
