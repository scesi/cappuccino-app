import styles from './search-bar.module.css'

export const SearchBar = ({ title }: { title: string }) => {
  return (
    <div className={styles.searchbar}>
      <input className={styles.input} type="text" placeholder={title} />
    </div>
  )
}
