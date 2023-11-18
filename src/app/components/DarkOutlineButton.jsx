import React from 'react'

const DarkOutlineButton = ({ text, py, px, style, handleCLick }) => {
  return (
    <button onClick={handleCLick} className={`border border-black rounded-md bg-transparent transition ease-in-out duration-300 inline-flex items-center justify-center text-center text-sm text-dark hover:bg-black hover:text-white ${style}`}>
      {text}
    </button>
  )
}

export default DarkOutlineButton