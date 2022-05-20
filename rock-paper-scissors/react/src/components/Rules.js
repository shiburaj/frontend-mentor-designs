import React from 'react'
import ruleFile from '../images/image-rules.svg'
import close from '../images/icon-close.svg'
import { useState } from 'react'

export default function Rules() {
    const [show, setShow] = useState(false);
  return (
    <div className="flex justify-center items-center py-5">
        {show && (
        <div
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl w-[25rem] h-[25rem] p-6"
        >
          <button onClick={(e) => { setShow(false)}} className="absolute top-5 right-5">
            <img src={close} alt="Close" />
          </button>
          <h1 className="text-center font-bold text-xl text-gray-600 bg-white mb-8">
            RULES
          </h1>
          <div className="flex justify-center items-center">
            <img src={ruleFile} alt="Rules" />
          </div>
        </div>
        )}
      <button onClick={(e) => { setShow(true)}} className="border rounded-md px-6 py-1 text-gray-200 hover:bg-white hover:text-gray-700">RULES</button>
    </div>
  )
}
