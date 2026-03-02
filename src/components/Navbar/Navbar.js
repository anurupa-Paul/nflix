import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import nf1 from '../../assets/download.png'
import { Search, Bell, User, ChevronDown } from 'lucide-react';
import { logout } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLogout = async (e) => {
    e.stopPropagation();
    await logout();
    setDropdownOpen(false);
    navigate('/login');
  };

  return (
    <div className='navbar'>
      <div  className='navbar-left'>
        <img src={nf1} alt='Netflix Logo'/>
        <ul>
          <li>Home</li>
          <li>Tv shows</li>
          <li>New and Popular</li>
          <li>Movies</li>
          <li>Recently Added</li>
          <li>My List</li>
        </ul>
      </div>
      <div  className='navbar-right'>
        <Search className='icons' size={24} />
        <p>children</p>
        <Bell className='icons' size={24} />
        <div className='nav-profile' ref={dropdownRef} onClick={() => setDropdownOpen(v => !v)}>
          <User className='profile' size={30} />
          <ChevronDown className='dropdown-caret' size={24} />
          {dropdownOpen && (
            <div className='dropdown' style={{display: 'block'}}>
              <p onClick={handleLogout}>sign out of Netflix</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;