import React from 'react';
import './SideBar.css'; // Assuming you save the CSS in Sidebar.css
import menu_employee from './assets/menu-employee.svg'; // Icon for Employee Menu
import app_logo from './assets/applogo.svg'; // App Logo
import company_logo from './assets/companylogo.svg'; // Company Logo

function Sidebar() {
  const handleClick = () => {
    // This function will be executed when the button is clicked
    // You can perform any other actions here, like updating state,
    // making API calls, etc.
  };  
  return (
    <div className="sidebar-box">
      <div className="sidebar-logo_menus-box">
        <div className="sidebar-appname-box">
          <div className="sidebar-logo_appname-container">
            <div className="sidebar-applogo">
            <img src={app_logo} alt="App Logo"/>
            </div>
            <div className="sidebar-appname">
            TalentSpace
            </div>
          </div>
        </div>
        <div className="sidebar-company-box">
          <div className="sidebar-company-container">
            <div className="sidebar-companylogo">
            <img src={company_logo} alt="Company Logo"/>
            </div>
            <div className="sidebar-companyname_details-container">
              <div className="sidebar-companyname">
              {/* Input your Company Name */}
              PJ Company
              </div>
              <div className="sidebar-companydetails-container">
                <div className="sidebar-companydetails">
                {/* Input your Company Type */}
                Corporate
                </div>
                <div className="sidebar-companydetails">
                {/* Divider */}
                •
                </div>
                <div className="sidebar-companydetails">
                {/* Divider */}
                3,000 Employees
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-title_menu-container">
          <div className="sidebar-menu-title">MANAGEMENT</div>
          <div className="sidebar-menu-container">
            <button className="sidebar-menu-list" onClick={handleClick}>
              <img src={menu_employee} alt="Menu Employee Logo"/>
              Employee
            </button>
            <button className="sidebar-menu-list" onClick={handleClick}>
              <img src={menu_employee} alt="Menu Employee Logo"/>
              Training & Development
            </button>
          </div>
        </div>
      </div>
      <div className="sidebar-user">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '16px', gap: '8px', isolation: 'isolate', width: '56px', height: '56px' }}>
          <div style={{ position: 'relative', width: '24px', height: '24px' }}>
            {/* Placeholder for Bell Icon - You might want to use an actual icon library */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#323A52" strokeWidth="1.5"/>
              <path d="M4.82812 19.1719C6.72487 17.2751 9.3535 16 12.0001 16C14.6466 16 17.2752 17.2751 19.1719 19.1719" stroke="#323A52" strokeWidth="1.5"/>
              <path d="M8.5 5.5H15.5" stroke="#323A52" strokeWidth="1.5"/>
              <path d="M18.5 5.5C18.5 7.98528 16.4853 10 14 10C11.5147 10 9.5 7.98528 9.5 5.5" stroke="#323A52" strokeWidth="1.5"/>
            </svg>
            <div style={{ position: 'absolute', width: '38px', height: '23px', left: '28px', top: 'calc(50% - 23px/2 - 11px)', background: '#A40006', borderRadius: '1000px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '30px', height: '15px', fontFamily: 'Inter', fontWeight: 700, fontSize: '12px', lineHeight: '15px', color: '#FFFFFF', textAlign: 'center' }}>123</div>
            </div>
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', padding: '12px', gap: '8px', width: '56px', height: '56px', borderRadius: '2333.33px' }}>
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0px', gap: '8.89px', width: '32px', height: '32px', background: '#F5F5F5', border: '0.8px solid #E3E3E3', borderRadius: '888.889px' }}>
            {/* Placeholder for User Icon - You might want to use an actual icon library */}
            <svg width="17.78" height="17.78" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" fill="#817C7C"/>
              <path d="M15.1111 16.3333C15.1111 14.1238 12.0571 12.6667 9 12.6667C5.94286 12.6667 2.88889 14.1238 2.88889 16.3333V17H15.1111V16.3333Z" fill="#817C7C"/>
            </svg>
          </div>
          {/* <div style={{ display: 'none', width: '161px', height: '24px', fontFamily: 'Inter', fontWeight: 700, fontSize: '20px', lineHeight: '24px', color: '#DBE8FC' }}>priambadajunior</div> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;