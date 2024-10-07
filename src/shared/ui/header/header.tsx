import logoSCESI from '@/assets/icons/logo-scesi-normal.svg'
import threedots from '@/assets/icons/three-dots.svg'

import styles from './header.module.css'

export const Header = () => {
  return (
    <header className="header">
      <img className={styles.logoscesi} src={logoSCESI} alt="logo scesi" />
      <h1 className={styles.title}>CAPPUCHINO</h1>
      <img src={threedots} alt="threeDotsbutton" className={styles.threedots} />
    </header>
  )
}
