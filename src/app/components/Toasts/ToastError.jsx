'use client'

import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';

const ToastError = ({ text }) => {
  return <>
    <div className="toast toast-top toast-end z-40">
      <div className="alert flex text-white">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-800 text-white">
          <HiX className="h-5 w-5" />
        </div>
        <span className='text-sm font-normal'>{text}</span>
      </div>
    </div>
  </>
}

export default ToastError