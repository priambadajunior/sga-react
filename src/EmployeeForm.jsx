import React, { useState, useEffect, useRef } from 'react';
import './EmployeeForm.css'; // Import the CSS file
import back from './assets/back.svg';
import profilepicture from './assets/profilepicture.svg';
import profilepicture40 from './assets/profilepicture40.svg';
import numbersquaretwo from './assets/NumberSquareTwo.svg';
import numbersquareone from './assets/NumberSquareOne.svg';
import openprofile from './assets/openprofile.svg';

const EmployeeForm = () => {
  const handleBackClick = () => {
    window.history.back();
  }
    return ( 
      <div className='employee-detail-container'>
        <div className='detail-header-container'>
          <div className='header-inner-container'>
            <img 
              src={back}
              alt="Back to Employee List"
              onClick={handleBackClick}
              style={{cursor: 'pointer'}}
           />
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
                        <div className='reporting-to-fullname_email-container' style={{overflow: "hidden", flex: 1}}>
                          <div className='reporting-to-fullname-text'>
                            Komang Priambada
                          </div>
                          <div className='employee-email_title-text' style={{overflow: 'hidden', flex: 1}}>
                            <TruncatedMarqueeOnHover text="komangpriambada@talentspace.id"/>
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
                        <div className='reporting-to-fullname_email-container' style={{overflow: "hidden", flex: 1}}>
                          <div className='reporting-to-fullname-text'>
                            Daniel Febryan Dewanda
                          </div>
                          <div className='employee-email_title-text' style={{overflow: 'hidden', flex: 1}}>
                            <TruncatedMarqueeOnHover text="danielfebryandewanda@talentspace.id"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='form-container'>
              {/* Current Active Table Name */}
            <div className='multiple-input-fields'>
              <div className='input-field-structure'>
                <div className='input-field-label'>Employee Full Name</div>
                <div className='input-field-fullname'>
                  <div className='input-field-fullname-firstname'>
                    <div className='input-field-hint-text'>
                      First Name
                    </div>
                  </div>
                  <div className='input-field-fullname-middlename'>
                    <div className='input-field-hint-text'>
                      Middle Name (Optional)
                    </div>
                  </div>
                  <div className='input-field-fullname-lastname'>
                    <div className='input-field-hint-text'>
                      Last Name
                    </div>
                  </div>
                </div>
              </div>
              <div className='horizontal-input-fields'>
                <div className='input-field-structure'>
                  <div className='input-field-employeeid'>
                    <div className='input-field-employeeid-prefix-container'>
                      <div className='input-field-employeeid-prefix-text'>
                        #
                      </div>
                      <div className='input-field-original'>
                        <div className='input-field-hint-text'>000000</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='input-field-structure'>
                  <div className='input-field-label'>Employee Email</div>
                  <div className='input-field-original'>
                    <div className='input-field-hint-text'>
                      employee@email.com
                    </div>
                  </div>
                </div>
              </div>
              <div className='horizontal-input-fields'>
                <div className='input-field-structure'>
                  <div className='input-field-label'>Division</div>
                  <div className='input-field-original'>
                    <div className='input-field-hint-text'>
                      Input Division
                    </div>
                  </div>
                </div>
                <div className='input-field-structure'>
                  <div className='input-field-label'>Position</div>
                  <div className='input-field-original'>
                    <div className='input-field-hint-text'>
                      Input Position
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
  

// Truncated Marquee on Hover Component
const TruncatedMarqueeOnHover = ({ text }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [animationDuration, setAnimationDuration] = useState('0s');

  useEffect(() => {
    // Measure text and container width to determine if truncation is needed
    const checkTruncation = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.scrollWidth;

        // Determine if text is longer than its container
        const truncated = textWidth > containerWidth;
        setIsTruncated(truncated);

        if (truncated) {
          // Calculate the distance the text needs to scroll to reveal its full content
          // Add a small buffer to ensure the end of the text is fully visible
          const distance = textWidth - containerWidth;
          setScrollDistance(distance);

          // Calculate animation duration based on scroll distance (e.g., 50 pixels per second)
          const duration = distance / 50; // Adjust speed as needed
          setAnimationDuration(`${duration}s`);
        } else {
          setScrollDistance(0);
          setAnimationDuration('0s');
        }
      }
    };

    // Run check on mount and window resize
    checkTruncation();
    window.addEventListener('resize', checkTruncation);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkTruncation);
  }, [text]); // Re-run if text changes

  const handleMouseEnter = () => {
    if (isTruncated) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden my-4 bg-purple-50 border border-purple-200 rounded-md p-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style>
        {`
        @keyframes marquee-reveal-on-hover {
          from { transform: translateX(0); }
          to { transform: translateX(calc(var(--scroll-dist) * -1px)); }
        }
        .truncated-text-content {
          white-space: nowrap;
          display: inline-block;
          transform: translateX(0);
          transition: transform 0.3s ease-out; /* Smooth transition for exit */
        }
        .truncated-text-content.is-truncated {
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%; /* Ensure ellipsis works within container */
        }
        .truncated-text-content.is-hovered {
          overflow: visible; /* Allow text to extend beyond container for marquee */
          text-overflow: clip; /* Remove ellipsis on hover */
          animation: marquee-reveal-on-hover var(--animation-dur) linear forwards;
        }
        `}
      </style>
      <div
        ref={textRef}
        className={`truncated-text-content text-purple-800 text-lg font-medium
          ${isTruncated && !isHovered ? 'is-truncated' : ''}
          ${isHovered ? 'is-hovered' : ''}
        `}
        style={{
          '--scroll-dist': scrollDistance,
          '--animation-dur': animationDuration,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default EmployeeForm;