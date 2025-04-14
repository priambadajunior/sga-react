import React from 'react';
import './EmployeeList.css'; // Import the CSS file

// Sample data for the table - replace with your actual data
// Assuming each object represents a row with data for both columns
const tableData = [
  { id: 1, department: 'Product Design', role: 'Senior UI/UX Designer', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id'},
  { id: 2, department: 'Finance', role: 'Financial Planning & Reporting Manager', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 3, department: 'Legal', role: 'Paralegal', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 4, department: 'Engineering', role: 'Software Engineer II', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 5, department: 'Marketing', role: 'Content Strategist', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 6, department: 'Human Resources', role: 'Recruiter', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 7, department: 'Sales', role: 'Account Executive', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 8, department: 'Product Management', role: 'Product Manager', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 9, department: 'Customer Support', role: 'Support Specialist', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 10, department: 'Data Science', role: 'Data Analyst', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 11, department: 'Operations', role: 'Operations Coordinator', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 12, department: 'Design', role: 'Graphic Designer', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 13, department: 'IT', role: 'System Administrator', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 14, department: 'Executive', role: 'Chief of Staff', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  { id: 15, department: 'Internship', role: 'Summer Intern', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id' },
  // Add more rows as needed
];

const EmployeeList = () => {
  // --- JSX Structure using className for styling ---
  return (
    // /* Employees Section */ - Outermost container
    <div className="employee-list-table">

      
      <div className="header-container">
        <div className="header">
          {/* Employee List  - Title */}
          <span className="employee-list">Employee List</span>

        </div>
      </div> {/* End Header Section */}

      {/* Employees - Main content area below header */}
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
                         <span className="table-header-text dept-header">Division</span>
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

                 {/* Column 2: Position */}
                 <div className="table-column column-2">
                     {/* Column 2 Header */}
                     <div className="table-header-cell">
                          <span className="table-header-text role-header">Position</span>
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

                {/* Column 3: EE ID */}
                <div className="table-column column-3">
                     {/* Column 3 Header */}
                     <div className="table-header-cell">
                          <span className="table-header-text eeid-header">EE ID</span>
                     </div>
                     {/* Column 3 Data Cells - Mapped from data */}
                     {tableData.map((row, index) => (
                          // /* Tables / Atom / Cell */
                          <div key={`col3-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                              {/* Text Link  */}
                             <div className="text-link-container">
                                 { /* Details */ }
                                 <div className="details-container">
                                     { /* Senior UI/UX Designer  Financial Planning...  etc. */ }
                                     <span className="cell-text">
                                         {row.eeid}
                                     </span>
                                 </div>
                             </div>
                          </div>
                     ))}
                 </div> {/* End Column 3 */}

                {/* Column 4: Employee Name */}
                <div className="column-4">
                     {/* Column 4 Header */}
                     <div className="table-header-cell">
                          <span className="table-header-text eeid-header">Employee Name</span>
                     </div>
                     {/* Column 4 Data Cells - Mapped from data */}
                     {tableData.map((row, index) => (
                          // /* Tables / Atom / Cell */
                          <div key={`col4-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                              {/* Text Link  */}
                             <div className="text-link-container">
                                 { /* Details */ }
                                 <div className="details-container">
                                     { /* Senior UI/UX Designer  Financial Planning...  etc. */ }
                                     <span className="cell-text">
                                         {row.name}
                                        
                                     </span>
                                     <span className="cell-text-email">
                                         {row.email}
                                     </span>
                                 </div>
                             </div>
                          </div>
                     ))}
                 </div> {/* End Column 4 */}

                 {/* Add more columns here by repeating the pattern */}

             </div> {/* End Column Container (Scrollable Area) */}
         </div> {/* End Table */}
      </div> {/* End Main Content Area */}
    </div> // End Employees Section
  );
};

export default EmployeeList;
