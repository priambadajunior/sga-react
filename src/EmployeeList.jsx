import React from 'react';
import './EmployeeList.css'; // Import the CSS file

// Sample data for the table - replace with your actual data
// Assuming each object represents a row with data for both columns
const tableData = [
  { id: 1, department: 'Product Design', role: 'Senior UI/UX Designer' },
  { id: 2, department: 'Finance', role: 'Financial Planning & Reporting Manager' },
  { id: 3, department: 'Legal', role: 'Paralegal' },
  { id: 4, department: 'Engineering', role: 'Software Engineer II' },
  { id: 5, department: 'Marketing', role: 'Content Strategist' },
  { id: 6, department: 'Human Resources', role: 'Recruiter' },
  { id: 7, department: 'Sales', role: 'Account Executive' },
  { id: 8, department: 'Product Management', role: 'Product Manager' },
  { id: 9, department: 'Customer Support', role: 'Support Specialist' },
  { id: 10, department: 'Data Science', role: 'Data Analyst' },
  { id: 11, department: 'Operations', role: 'Operations Coordinator' },
  { id: 12, department: 'Design', role: 'Graphic Designer' },
  { id: 13, department: 'IT', role: 'System Administrator' },
  { id: 14, department: 'Executive', role: 'Chief of Staff' },
  { id: 15, department: 'Internship', role: 'Summer Intern' },
  // Add more rows as needed
];

const EmployeeList = () => {
  // --- JSX Structure using className for styling ---
  return (
    // /* Employees Section */ - Outermost container
    <div className="employee-list-table">

      
      <div className="header-container">
        <div className="header">
          Employee List  - Title
          <span className="employee-list">Employee List</span>

          {/* Tabs + Fullscreen  - Right side controls */}
          <div className="tabs-fullscreen-container">

            {/* Search Bar  (Hidden by default - controlled via CSS or conditional rendering) */}
            <div className="search-bar">
              {/* Placeholder for search icon and input */}
              <span style={{opacity: 0.5}}>🔍 Search...</span>
            </div>

            {/* Tabs  Group 1 (Day/Week/Month) (Hidden by default) */}
            <div className="tabs-group-1">
                <div className="tab tab-day"><span className="tab-text-day">Day</span></div>
                <div className="tab tab-week active"><span className="tab-text-week">Week</span></div> {/* Active Example */}
                <div className="tab tab-month"><span className="tab-text-month">Month</span></div>
            </div>

             {/* Tabs  Group 2 (Ongoing/History) (Hidden by default) */}
             <div className="tabs-group-2">
                <div className="tab tab-ongoing active"><span className="tab-text-ongoing">Ongoing</span></div> {/* Active Example */}
                <div className="tab tab-history"><span className="tab-text-history">History</span></div>
            </div>

            /* ArrowsOutSimple */ - Fullscreen Icon
            <div className="fullscreen-icon-container" title="Fullscreen">
               <div className="vector-placeholder"></div> {/* Visual placeholder for icon */}
            </div>
          </div>
        </div>
      </div> {/* End Header Section */}

      /* Employees */ - Main content area below header
      <div className="employees-content">

          {/* COMPENSATION & BENEFITS  Label (Hidden by default) */}
         <div className="compensation-benefits-label">COMPENSATION & BENEFITS</div>

          {/* Table  - The main table structure */}
         <div className="table-container">

              {/* Column  - Container for columns, enables scrolling */}
             <div className="table-column-container">

                 {/* Column 1: Department */}
                 <div className="table-column column-1">
                     {/* Column 1 Header */}
                     <div className="table-header-cell">
                         <span className="table-header-text dept-header">DEPT.</span>
                     </div>
                     {/* Column 1 Data Cells - Mapped from data */}
                     {tableData.map((row, index) => (
                         // /* Tables / Atom / Cell */
                         <div key={`col1-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                            { /* Text Link */ }
                            <div className="text-link-container">
                                { /* Details */ }
                                <div className="details-container">
                                    {/* /* Product Design */ /* General Counsel  etc. */}
                                    <span className="cell-text">
                                        {row.department}
                                    </span>
                                </div>
                            </div>
                         </div>
                     ))}
                 </div> {/* End Column 1 */}

                 {/* Column 2: Role */}
                 <div className="table-column column-2">
                     {/* Column 2 Header */}
                     <div className="table-header-cell">
                          <span className="table-header-text role-header">ROLE</span>
                     </div>
                     {/* Column 2 Data Cells - Mapped from data */}
                     {tableData.map((row, index) => (
                          // /* Tables / Atom / Cell */
                          <div key={`col2-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                              {/* Text Link  */}
                             <div className="text-link-container">
                                 { /* Details */ }
                                 <div className="details-container">
                                     { /* Senior UI/UX Designer  Financial Planning...  etc. */ }
                                     <span className="cell-text">
                                         {row.role}
                                     </span>
                                 </div>
                             </div>
                          </div>
                     ))}
                 </div> {/* End Column 2 */}

                 {/* Add more columns here by repeating the pattern */}

             </div> {/* End Column Container (Scrollable Area) */}
         </div> {/* End Table */}
      </div> {/* End Main Content Area */}
    </div> // End Employees Section
  );
};

export default EmployeeList;
