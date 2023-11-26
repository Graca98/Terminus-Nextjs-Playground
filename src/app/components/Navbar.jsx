'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import HeaderImg from "@/app/img/header.png"

const Navbar = ({ content }) => {
  const [isOpen, setOpen] = useState(false);

  // Zavře drawer při kliknutí na Link
  const handleClick = () => {
    setOpen(!isOpen);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  // -----

  return <>
    <Link href="/" className="flex px-4 py-2">
      <Image src={HeaderImg} className='w-1/2 h-auto' alt='Terminus logo'></Image>
    </Link>
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={handleClick}
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="sticky inset-x-0 top-0 w-full bg-base-300 flex">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost ms-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal flex items-center gap-2">
              {/* Navbar menu content here */}
              <li><Link href="/">Informace</Link></li>
              <li><Link href="/main/pravidla">Pravidla</Link></li>

              {/* Test */}
              <div className="dropdown dropdown-hover group">
                <label tabIndex={0} className="menu menu-horizontal flex">
                  Hlavní stránka
                  {/* hamburger icon */}
                  <svg
                    className="group-hover:hidden fill-current h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
                  </svg>
                  {/* close icon */}
                  <svg
                    className="hidden group-hover:block fill-current h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="upper-arrow"
                  >
                    <path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path>
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-md w-52"
                >
                  <li>
                    <a>Informace</a>
                  </li>
                  <li>
                    <a>Pravidla</a>
                  </li>
                </ul>
              </div>

            </ul>
          </div>
          {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}
        </div>
        {/* Page content here */}
        {content}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay" ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-300">

          {/* Sidebar content here */}
          <ul className="menu bg-base-300 w-full rounded-box">
            <li>
              <span className="menu-dropdown-toggle menu-dropdown-show">Hlavní stránka</span>
              <ul className="menu-dropdown menu-dropdown-show">
                <li><Link href="/" onClick={closeDrawer}>Informace</Link></li>
                <li><Link href="/main/pravidla" onClick={closeDrawer}>Pravidla</Link></li>
              </ul>
            </li>
            <li><a>Store</a></li>
          </ul>

          {/* Linky bez podlinků */}
          {/* <li><Link href="/" onClick={closeDrawer}>Informace</Link></li>
          <li><Link href="/main/pravidla" onClick={closeDrawer}>Pravidla</Link></li> */}
        </ul>
      </div>
    </div>
  </>;
};

export default Navbar;
