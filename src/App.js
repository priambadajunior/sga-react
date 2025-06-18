import './App.css';
import SideBar from './SideBar'; // Importing SideBar
import SearchBar from './SearchBar'; // Importing SearchBar
import EmployeeList from './EmployeeList'; // Importing EmployeeList
import EmployeeDetail from './EmployeeDetail'; // Importing EmployeeDetail
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="App">
          <SideBar />
          {/* <SearchBar setSearchQuery={setSearchQuery} /> */}
          <Routes>
            <Route path="/" element={<EmployeeList/>}/>
            <Route path="/employee/:id" element={<EmployeeDetail/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;