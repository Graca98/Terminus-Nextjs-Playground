'use client'

import { HiOutlineClipboardCheck } from 'react-icons/hi';

const ToastCopy = ({ text }) => {
  return <>
    <div className="toast toast-top toast-end z-40">
      <div className="alert flex text-white">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-600 text-white">
          <HiOutlineClipboardCheck className="h-5 w-5" />
        </div>
        <span className='text-sm font-normal'>{text}</span>
      </div>
    </div>
  </>
}

export default ToastCopy