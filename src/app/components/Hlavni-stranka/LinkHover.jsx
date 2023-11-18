'use client'
import { useState } from 'react';

const LinkHover = ({ text }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <span
        className={`mx-1 text-blue-500 underline underline-offset-4 ${isHovered ? "text-blue-600" : ""
          }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >{text}</span>
      <img
        src="/linkArrow.svg"
        alt='Link Arrow'
        className={`inline-block transition-transform ease-in-out hover:translate-x-1 hover:scale-110 ${isHovered ? "translate-x-1 scale-110" : ""}`}
      ></img>
    </>
  );
};

export default LinkHover;
