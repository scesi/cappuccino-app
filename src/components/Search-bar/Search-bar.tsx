

import styles from './Search-bar.module.css'

const Searchbar = ({ title }: { title: string }) => {
  return (
    <div className={styles.searchbar}>
      <input className={styles.input} type="text" placeholder={title}/>
    </div>
  )
}

export default Searchbar