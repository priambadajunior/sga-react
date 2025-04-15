import React, { useEffect, useState } from 'react';
import './EmployeeList.css'; // Import the CSS file

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div className="employee-list-table">
      <div className="header-container">
        <div className="header">
          <span className="employee-list">Employee List</span>
        </div>
      </div>
      <div className="employees-content">
        <div className="compensation-benefits-label">COMPENSATION & BENEFITS</div>
        <div className="table-container">
          <div className="table-column-container">
            <div className="table-column column-1">
              <div className="table-header-cell">
                <span className="table-header-text dept-header">Division</span>
              </div>
              {employees.map((row, index) => (
                <div key={`col1-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                  <div className="text-link-container">
                    <div className="details-container">
                      <span className="cell-text">{row.division}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="table-column column-2">
              <div className="table-header-cell">
                <span className="table-header-text role-header">Position</span>
              </div>
              {employees.map((row, index) => (
                <div key={`col2-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                  <div className="text-link-container">
                    <div className="details-container">
                      <span className="cell-text">{row.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="table-column column-3">
              <div className="table-header-cell">
                <span className="table-header-text eeid-header">EE ID</span>
              </div>
              {employees.map((row, index) => (
                <div key={`col3-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                  <div className="text-link-container">
                    <div className="details-container">
                      <span className="cell-text">{row.eeid}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="column-4">
              <div className="table-header-cell">
                <span className="table-header-text eeid-header">Employee Name</span>
              </div>
              {employees.map((row, index) => (
                <div key={`col4-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                  <div className="text-link-container">
                    <div className="details-container">
                      <span className="cell-text">{row.name}</span>
                      <span className="cell-text-email">{row.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="table-column column-5">
              <div className="rumah-title">
                <div className="table-header-skill-gap-cell">
                  <span className="table-header-text skill-gap-header">Skill Gap</span>
                </div>
                <div className="rumah-subheader">
                  <div className="table-subheader-skill-gap-cell">
                    <span className="table-header-text overall-header">Overall Technical Skill</span>
                  </div>
                  <div className="table-subheader-skill-gap-cell">
                    <span className="table-header-text must-have-header">Must-Have Technical Skill</span>
                  </div>
                  <div className="table-subheader-skill-gap-cell">
                    <span className="table-header-text nice-to-have-header">Nice-to-Have Technical Skill</span>
                  </div>
                  <div className="table-subheader-skill-gap-cell">
                    <span className="table-header-text overall-header">Overall Soft Skill</span>
                  </div>
                  <div className="table-subheader-skill-gap-cell">
                    <span className="table-header-text must-have-header">Must-Have Soft Skill</span>
                  </div>
                  <div className="table-subheader-skill-gap-cell">
                    <span className="table-header-text nice-to-have-header">Nice-to-Have Soft Skill</span>
                  </div>
                </div>
              </div>
              {employees.map((row, index) => (
                <div key={`col5-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                  <div className="text-link-container">
                    <div className="details-container">
                      {row.skills.map((skill, skillIndex) => (
                        <div key={`skill-${skillIndex}`}>
                          <span className="cell-text">{skill.skill_name}</span>
                          <span className="cell-text">{skill.skill_type_name}</span>
                          <span className="cell-text">{skill.kategori}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
