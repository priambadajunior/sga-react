import React from 'react';
import './EmployeeDetail.css'; // Import the CSS file
import back from './assets/back.svg';
import profilepicture from './assets/profilepicture.svg';
import profilepicture40 from './assets/profilepicture40.svg';
import numbersquaretwo from './assets/NumberSquareTwo.svg';
import numbersquareone from './assets/NumberSquareOne.svg';
import openprofile from './assets/openprofile.svg';

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
        </div>
      </div>
    </div>
  )
};

export default EmployeeDetail;