
'use client';

import { Dropdown } from 'flowbite-react';
import Link from 'next/link';

export default function FlowbiteDropdown() {
  return (
    <Dropdown dismissOnClick={true} label="Hlavní stránka" inline>
      <Dropdown.Item as={Link} href="/">
        Informace
      </Dropdown.Item>
      <Dropdown.Item as={Link} href="/main/pravidla">
        Pravidla
      </Dropdown.Item>
      {/* <Dropdown.Item as="a" href="https://flowbite.com/" target="_blank">
        External link
      </Dropdown.Item> */}
    </Dropdown>
  );
}
