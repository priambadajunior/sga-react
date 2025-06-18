import search from './assets/search.svg';

export const EmployeeList = () => {
  return (
    <div className="search-bar">
      <div className="search-bar-icon">
        <img src={search}/>
      </div>
      <div className="search-hint-text">
        Search by Division, Position, EE ID, Employee Name, or Employee Email
      </div>
      <div className="search-bar-shortcut">
        <div className='search-bar-shortcut-text'>ctrl + K</div>
      </div>
    </div>
  );
};