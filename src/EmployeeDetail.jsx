import React from 'react';
import './EmployeeDetail.css'; // Import the CSS file
import EmployeeList, { tableData, getBackgroundColor } from './EmployeeList.jsx';
import back from './assets/back.svg';
import profilepicture from './assets/profilepicture.svg';
import profilepicture40 from './assets/profilepicture40.svg';
import numbersquaretwo from './assets/NumberSquareTwo.svg';
import numbersquareone from './assets/NumberSquareOne.svg';
import openprofile from './assets/openprofile.svg';
import fullscreen from './assets/fullscreen.svg';

const EmployeeDetail = () => {
    return ( 
      <div className='employee-detail-container'>
        <div className='detail-header-container'>
          <div className='header-inner-container'>
            <img src={back} alt="Back to Employee List"/>
            <div className='header-text-previous-menu'>
              Employee
            </div>
            <div className='header-text-current-employee'>
              /
            </div>
            <div className='header-eeid_fullname-container'>
              <div className='header-text-current-employee'>
                00413
              </div>
              <div className='header-text-current-employee'>
                -
              </div>
              <div className='header-text-current-employee'>
                Kadek Wikananda Laksmana
              </div>
            </div>
          </div>
        </div>
        <div className='employee-detail'>
          <div className='employee-card'>
            <div className='employee-profile'>
              <div className='employee-profile-header'>
                <div className='employee-profile-thumbnail'>
                </div>
                <div className='employee-profile-pp-row-container'>
                  <div className='employee-profile-picture-container'>
                  <img src={profilepicture} alt="Employee Profile Picture"/>
                  </div>
                </div>
              </div>
              <div className='employee-profile-details-container'>
                <div className='employee-ID-chips'>
                  <div className='employee-ID-chips-text'>#</div>
                  <div className='employee-ID-chips-text'>00143</div>
                </div>
                <div className='employee-fullname_email-container'>
                  <div className='employee-fullname-text'>
                    Kadek Wikananda Laksmana
                  </div>
                  <div className='employee-email_title-text'>
                    priambadajunior@talentspace.id
                  </div>
                </div>
              </div>
            </div>
            <div className='employee-details-bottom-container'>
              <div className='employee-details-section-container'>
                <div className='employee-email_title-text'>
                  JOIN DATE
                </div>
                <div className='employee-details-text'>
                  11 Oct 2021 (3 years 5 months 12 days)
                </div>
              </div>
              <div className='employee-details-section-container'>
                <div className='employee-email_title-text'>
                  DIVISION
                </div>
                <div className='employee-details-text'>
                  Product Design
                </div>
              </div>
              <div className='employee-details-section-container'>
                <div className='employee-email_title-text'>
                  POSITION
                </div>
                <div className='employee-details-text'>
                  Senior UI/UX Designer
                </div>
              </div>
              <div className='employee-details-section-container'>
                <div className='employee-email_title-text'>
                  REPORTING TO
                </div>
                <div className='reporting-to-outer-container'>
                  <div className='reporting-to-inner-container'>
                    <div className='reporting-to-details-container'>
                      <div className='reporting-to-position_icon-container'>
                        <div className='reporting-to-position-container'>
                          <div className='reporting-to-position-text'>
                            CHIEF EXECUTIVE OFFICER
                          </div>
                          <img src={numbersquaretwo} alt="2nd Level"/>
                        </div>
                        <img src={openprofile} alt="Open Profile"/>
                      </div>
                      <div className='reporting-to-pp_details-container'>
                        <div className='reporting-to-profile-picture-container'>
                          <img src={profilepicture40} class="responsive-image" alt="Employee Profile Picture"/>
                        </div>
                        <div className='reporting-to-fullname_email-container' style={{flex: 1}}>
                          <div className='reporting-to-fullname-text'>
                            Komang Priambada
                          </div>
                          <div className='employee-email_title-text' style={{flex: 1}}>
                            komangpriambada@talentspace.id
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='reporting-to-inner-container'>
                    <div className='reporting-to-details-container'>
                      <div className='reporting-to-position_icon-container'>
                        <div className='reporting-to-position-container'>
                          <div className='reporting-to-position-text'>
                            HEAD OF DESIGN
                          </div>
                          <img src={numbersquareone} alt="1st Level"/>
                        </div>
                        <img src={openprofile} alt="Open Profile"/>
                      </div>
                      <div className='reporting-to-pp_details-container'>
                        <div className='reporting-to-profile-picture-container'>
                          <img src={profilepicture40} class="responsive-image" alt="Employee Profile Picture"/>
                        </div>
                        <div className='reporting-to-fullname_email-container'>
                          <div className='reporting-to-fullname-text'>
                            Komang Priambada
                          </div>
                          <div className='employee-email_title-text'>
                            komangpriambada@talentspace.id
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='skills-details-card'>
            <div className='table-name-container'>
              {/* Current Active Table Name */}
              <div className='table-name'>
                <div className='active-table-text'>
                  Technical Skills
                </div>
                <div className='inactive-table-text'>
                  /
                </div>
                <div className='inactive-table-text'>
                  Soft Skills
                </div>
                {/* + Icon */}
              </div>
              <img src={fullscreen} alt="Fullscreen"/>
            </div>
            <div className='skills-table-container'>
              {/* Table */}
              <div className='table-title-container'>
                <div className='table-title' style={{borderRight: '1px solid #E3E3E3'}}>
                  {/* Must Have */}
                  <div className='employee-email_title-text' style={{textAlign: 'center'}}>Must-Have</div>
                </div>
                <div className='table-title'>
                  {/* Nice-to-Have */}
                  <div className='employee-email_title-text' style={{textAlign: 'center'}}>Nice-to-Have</div>
                </div>
              </div>
              <div className='table-row-container'>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Design System {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#C5FFD3', border: '1.5px solid #3FE266', width: '94%'}}></div>
                    </div>
                  </div>
                </div>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Corporate Governance - Company Law & Corporate Secretarial Practice {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#FF484B', border: '1.5px solid #AA0F12', width: '39%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='table-row-container'>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Design System {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#C5FFD3', border: '1.5px solid #3FE266', width: '94%'}}></div>
                    </div>
                  </div>
                </div>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Corporate Governance - Company Law & Corporate Secretarial Practice {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#FF484B', border: '1.5px solid #AA0F12', width: '39%'}}></div>
                    </div> </div>
                </div>
              </div>
              <div className='table-row-container'>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Design System {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#C5FFD3', border: '1.5px solid #3FE266', width: '94%'}}></div>
                    </div>
                  </div>
                </div>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Corporate Governance - Company Law & Corporate Secretarial Practice {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#FF484B', border: '1.5px solid #AA0F12', width: '39%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='table-row-container'>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Design System {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#C5FFD3', border: '1.5px solid #3FE266', width: '94%'}}></div>
                    </div>
                  </div>
                </div>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Corporate Governance - Company Law & Corporate Secretarial Practice {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#FF484B', border: '1.5px solid #AA0F12', width: '39%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='table-row-container'>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Design System {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#C5FFD3', border: '1.5px solid #3FE266', width: '94%'}}></div>
                    </div>
                  </div>
                </div>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Corporate Governance - Company Law & Corporate Secretarial Practice {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#FF484B', border: '1.5px solid #AA0F12', width: '39%'}}></div>
                    </div> </div>
                </div>
              </div>
              <div className='table-row-container'>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Design System {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#C5FFD3', border: '1.5px solid #3FE266', width: '94%'}}></div>
                    </div>
                  </div>
                </div>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Corporate Governance - Company Law & Corporate Secretarial Practice {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#FF484B', border: '1.5px solid #AA0F12', width: '39%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='table-row-container'>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Design System {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#C5FFD3', border: '1.5px solid #3FE266', width: '94%'}}></div>
                    </div>
                  </div>
                </div>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Corporate Governance - Company Law & Corporate Secretarial Practice {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#FF484B', border: '1.5px solid #AA0F12', width: '39%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='table-row-container'>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Design System {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#C5FFD3', border: '1.5px solid #3FE266', width: '94%'}}></div>
                    </div>
                  </div>
                </div>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Corporate Governance - Company Law & Corporate Secretarial Practice {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#FF484B', border: '1.5px solid #AA0F12', width: '39%'}}></div>
                    </div> </div>
                </div>
              </div>
              <div className='table-row-container'>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Design System {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#C5FFD3', border: '1.5px solid #3FE266', width: '94%'}}></div>
                    </div>
                  </div>
                </div>
                <div className='skills-cell-container'>
                  <div className='skills-name_progressbar'>
                    <div className='skills-name_level-container'>
                      {/* Skill Name */}
                      <div className='reporting-to-fullname-text' style={{ fontSize: '14px', flex: 1 }}>
                      Corporate Governance - Company Law & Corporate Secretarial Practice {/* Change Skill Name Here */}
                      </div>
                      <div className='skills-level-container'>
                        <div className='employee-email_title-text' style={{ flex: 1 }}>
                          3 of 5 {/* Change Current Skill Level of Expected Here */}
                        </div>
                        {/* <div className="row-chips">
                          {tableData.map(item => (
                            <span className="skill-gap-chips" style={{ backgroundColor: getBackgroundColor(item.NSSG) }}>
                              <span className='skill-gap-value'>
                                {item.NSSG}
                              </span>
                            </span>
                          ))}
                        </div> */}
                      </div>
                    </div>
                    <div className='skill-progress-bar'>
                      <div className='skill-progress-bar-fill' style={{background: '#FF484B', border: '1.5px solid #AA0F12', width: '39%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};
  
export default EmployeeDetail;