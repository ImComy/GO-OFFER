import React, { useState, useRef, useEffect } from 'react';
import { FaBell } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const DropdownMenu = ({ icon: Icon, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="nav-dropdown" ref={dropdownRef}>
      <div onClick={handleToggle} className="nav-dropdown-icon">
        <Icon />
      </div>
      {isOpen && (
        <ul className="nav-dropdown-menu">
          {items.map((item, index) => (
            <li key={index} className="nav-dropdown-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
