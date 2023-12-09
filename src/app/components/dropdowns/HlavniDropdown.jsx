import React, { useState } from 'react';
import Link from 'next/link';

const HlavniDropdown = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <div className={`dropdown dropdown-hover group ${isDropdownOpen ? 'open' : ''}`}>
        <label
          tabIndex={0}
          className="menu menu-horizontal flex"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          Hlavní stránka
          {/* hamburger icon */}
          <svg
            className="group-hover:hidden fill-current h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* ... */}
          </svg>
          {/* close icon */}
          <svg
            className="hidden group-hover:block fill-current h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="upper-arrow"
          >
            {/* ... */}
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-md w-52"
        >
          <li onClick={handleLinkClick}>
            <Link href="/">Informace</Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href="/main/pravidla">Pravidla</Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link href="/main/download">Ke stažení</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HlavniDropdown;
