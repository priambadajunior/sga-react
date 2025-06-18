import search from './assets/search.svg';
import './SearchBar.css';

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div className="search-bar">
      <div className="search-bar-icon">
        <img src={search} alt="search" />
      </div>
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search by Division, Position, EE ID, Employee Name, or Employee Email"
        onChange={e => setSearchQuery(e.target.value)}
        style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent' }}
      />
      <div className="search-bar-shortcut">
        <div className='search-bar-shortcut-text'>ctrl + K</div>
      </div>
    </div>
  );
};

export default SearchBar;