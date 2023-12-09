'use client'

import React from 'react'
import ToastInfo from './Toasts/ToastCopy'
import { useState } from 'react'


const CopyButton = ({ text, style }) => {

  const [toast, setToast] = useState("")

  const copyToClipboard = () => {
    console.log("funguji..");
    setToast(<ToastInfo text="Zkopírováno do schránky" />)
    setTimeout(() => {
      setToast("")
    }, 2000)
    navigator.clipboard.writeText(text);
  };

  return (<>
    <button onClick={copyToClipboard} className={`border border-black rounded-md bg-transparent transition ease-in-out duration-300 inline-flex items-center justify-center text-center text-sm text-dark hover:bg-black hover:text-white ${style}`}>
      {text}
    </button>
    {toast}
  </>
  )
}

export default CopyButton