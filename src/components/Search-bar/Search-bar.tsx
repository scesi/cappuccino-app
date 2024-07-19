import searchIcon from '../../assets/searchIcon.svg'

import './Search-bar.css'

const SearchBar = ({ title }: { title: string }) => {
  return (
    <div className="searchbar">
      <input type="text" placeholder={title} />
      <button className="searchicon">
        <img src={searchIcon} alt="Search icon" />
      </button>
    </div>
  )
}

export default SearchBar
