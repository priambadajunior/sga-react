import React, { useState } from 'react';

export function SortFunction({ sort, sort_ascending, sort_descending }) {
  const [isHovered, setIsHovered] = useState(false);
  const [sortState, setSortState] = useState(null); // null, 'asc', 'desc'

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (sortState === null) {
      setSortState('asc');
    } else if (sortState === 'asc') {
      setSortState('desc');
    } else {
      setSortState(null);
    }
  };

  const getIconSource = () => {
    if (sortState === 'asc') {
      return sort_ascending;
    } else if (sortState === 'desc') {
      return sort_descending;
    } else if (isHovered) {
      return sort;
    }
    return null; // No icon to show
  };

  const iconSource = getIconSource();

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ cursor: 'pointer' }} // Indicate it's interactive
    >
      {iconSource && <img src={iconSource} alt="Sort Icon" />}
      {/* Your header text or other content can go here */}
    </div>
  );
}

export default SortFunction;