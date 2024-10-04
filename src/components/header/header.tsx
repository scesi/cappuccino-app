import logoSCESI from '@/assets/logoSCESI-Normal.svg'
import threedots from '@/assets/threedots.svg'

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
