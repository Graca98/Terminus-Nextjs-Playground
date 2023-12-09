import { Inter } from 'next/font/google'
import './globals.css'
import HeaderImg from "@/app/img/header.png"
import Link from 'next/link'
import Image from 'next/image'
import HoverPopover from './components/popovers/HoverPopover'
import Dropdown from './components/dropdowns/Dropdown'

import Testing from './components/Testing'


import Navbar from './components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Terminus',
  description: 'TerminusCraft website for minecraft',
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body className={inter.className}>

        <section>
          <Navbar content={children}></Navbar>








          {/*                Testování                   */}
          <Testing></Testing>

          {/* Navigace (sdílená)*/}
          <Link href="/" className="flex px-4 py-2">
            <Image src={HeaderImg} className='w-1/2 h-auto' alt='Terminus logo'></Image>
          </Link>

          <nav className="flex sticky inset-x-0 top-0 content-center justify-between py-2 px-4 bg-gray-700 text-white">
            {/* Links */}
            <ul className="flex content-center flex-wrap gap-6">
              <li className="">
                <Link
                  href="/"
                  className="text-white hover:bg-teal-800 px-4 py-2"
                >
                  Informace
                </Link>
              </li>
              <li>
                <Link href="/main/pravidla" className="text-white hover:bg-teal-800 px-4 py-2">Pravidla</Link>
              </li>
              <li>
                <Link href="/main/download" className="text-white hover:bg-teal-800 px-4 py-2">Ke stažení</Link>
              </li>
            </ul>

            {/* Popover test */}
            <Dropdown></Dropdown>

            <HoverPopover btnText="play.tcraft.eu" pText="Klikni pro zkopírování IP adresy"></HoverPopover>

            <button className="text-white hover:bg-teal-800 px-4 py-2">Store</button>
          </nav>

          {/* Obsah stránek */}
          {/* {children} */}
        </section>

        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
