import React from 'react';
import './EmployeeList.css'; // Import the CSS file
import fullscreen from './assets/fullscreen.svg';

// Sample data for the table - replace with your actual data
// Assuming each object represents a row with data for both columns
const tableData = [
  { id: 1, division: 'Product Design', role: 'Senior UI/UX Designer', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%'},
  { id: 2, division: 'Finance', role: 'Financial Planning & Reporting Manager', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 3, division: 'Legal', role: 'Paralegal', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 4, division: 'Engineering', role: 'Software Engineer II', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 5, division: 'Marketing', role: 'Content Strategist', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 6, division: 'Human Resources', role: 'Recruiter', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 7, division: 'Sales', role: 'Account Executive', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 8, division: 'Product Management', role: 'Product Manager', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 9, division: 'Customer Support', role: 'Support Specialist', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 10, division: 'Data Science', role: 'Data Analyst', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 11, division: 'Operations', role: 'Operations Coordinator', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 12, division: 'Design', role: 'Graphic Designer', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 13, division: 'IT', role: 'System Administrator', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 14, division: 'Executive', role: 'Chief of Staff', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  { id: 15, division: 'Internship', role: 'Summer Intern', eeid: '00143', name: 'Kadek Wikananda Laksmana Priambada', email: 'priambadajunior@talentspace.id', OTSG: '6%', MTSG: '1%', NTSG: '6%', OSSG: '1%', MSSG: '1%', NSSG: '6%' },
  // Add more rows as needed
];

const EmployeeList = () => {
  // --- JSX Structure using className for styling ---
  return (
    // /* Employees Section */ - Outermost container
    <div className="employee-list-table">
      <div className="header-container">
        <div className="header">
          <div className="table-name">Employee List</div>
          <div className="header-fullscreen-icon">
              <img src={fullscreen} alt="View table in full screen"/>
          </div>
        </div>
      </div>

      {/* Employees - Main content area below header */}
      <div className="employees-content">
        {/* Table  - The main table structure */}
         <div className="table-container">
            {/* Column  - Container for columns, enables scrolling */}
             <div className="table-column-container">
                 {/* Column 1: Division */}
                 <div className="column-1">
                     {/* Column 1 Header */}
                     <div className="table-header-cell">
                         <span className="table-header-text">Division</span>
                     </div>
                     {/* Column 1 Data Cells - Mapped from data */}
                     {tableData.map((row, index) => (
                         // /* Tables / Atom / Cell */
                         <div key={`col1-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                            { /* Text Link */ }
                            <div className="row-container">
                                { /* Details */ }
                                <div className="row-text">
                                    {/* /* Product Design */ /* General Counsel  etc. */}
                                    <span className="cell-text">
                                        {row.division}
                                    </span>
                                </div>
                            </div>
                         </div>
                     ))}
                 </div> {/* End Column 1 */}

                 {/* Column 2: Position */}
                 <div className="column-2">
                     {/* Column 2 Header */}
                     <div className="table-header-cell">
                          <span className="table-header-text">Position</span>
                     </div>
                     {/* Column 2 Data Cells - Mapped from data */}
                     {tableData.map((row, index) => (
                          // /* Tables / Atom / Cell */
                          <div key={`col2-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                              {/* Text Link  */}
                             <div className="row-container">
                                 { /* Details */ }
                                 <div className="row-text">
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
                <div className="column-3">
                     {/* Column 3 Header */}
                     <div className="table-header-cell">
                          <span className="table-header-text eeid-header">EE ID</span>
                     </div>
                     {/* Column 3 Data Cells - Mapped from data */}
                     {tableData.map((row, index) => (
                          // /* Tables / Atom / Cell */
                          <div key={`col3-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                              {/* Text Link  */}
                             <div className="row-container">
                                 { /* Details */ }
                                 <div className="row-text">
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
                          <span className="table-header-text">Employee Name</span>
                     </div>
                     {/* Column 4 Data Cells - Mapped from data */}
                     {tableData.map((row, index) => (
                          // /* Tables / Atom / Cell */
                          <div key={`col4-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                              {/* Text Link  */}
                             <div className="row-container">
                                 { /* Details */ }
                                 <div className="row-text">
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

                 {/* Column 5: Skills Gap*/}
                 <div className="column-5">
                   <div className="header-with-subheader-container">
                     <div className="header-with-subheader-cell">
                      <span className="table-header-text">Skill Gap</span>
                     </div>
                     <div className='subheader-container'>
                        <div className="subheader-cell">
                          <span className="table-header-text">Overall Technical Skill</span>
                        </div>
                        <div className="subheader-cell">  
                          <span className="table-header-text">Must-Have Technical Skill</span>
                        </div>
                        <div className="subheader-cell">
                          <span className="table-header-text">Nice-to-Have Technical Skill</span>
                        </div>
                        <div className="subheader-cell">
                          <span className="table-header-text">Overall Soft Skill</span>
                        </div>
                        <div className="subheader-cell">  
                          <span className="table-header-text">Must-Have Soft Skill</span>
                        </div>
                        <div className="subheader-cell">
                          <span className="table-header-text">Nice-to-Have Soft Skill</span>
                        </div>
                     </div>
                   </div>
                     {tableData.map((row, index) => (
                          // /* Tables / Atom / Cell */
                          <div key={`col5-${row.id || index}`} className="table-data-cell" style={{ order: index + 1 }}>
                              {/* Text Link  */}
                             <div className="row-container-skill-gap">
                                <div className="row-chips">
                                  <span className="skill-gap-chips">
                                    <span className='skill-gap-value'>
                                    {row.OTSG}
                                    </span>
                                  </span>
                                </div>
                                <div className="row-chips">
                                  <span className="skill-gap-chips">
                                    <span className='skill-gap-value'>
                                    {row.MTSG}
                                    </span>
                                  </span>
                                </div>
                                <div className="row-chips">
                                  <span className="skill-gap-chips">
                                    <span className='skill-gap-value'>
                                    {row.NTSG}
                                    </span>
                                  </span>
                                </div>
                                <div className="row-chips">
                                  <span className="skill-gap-chips">
                                    <span className='skill-gap-value'>
                                    {row.OSSG}
                                    </span>
                                  </span>
                                </div>
                                <div className="row-chips">
                                  <span className="skill-gap-chips">
                                    <span className='skill-gap-value'>
                                    {row.MSSG}
                                    </span>
                                  </span>
                                </div>
                                <div className="row-chips">
                                  <span className="skill-gap-chips">
                                    <span className='skill-gap-value'>
                                    {row.NSSG}
                                    </span>
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