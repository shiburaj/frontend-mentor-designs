import React from 'react'
import logo from '../images/logo.svg'

export default function Score({ score }) {
    const padScore = () => {
        return (score < 10) ? `0${score}` : score
    }
  return (
    <div
      className="flex md:max-w-3xl w-full justify-between mx-auto p-5 mt-5 border-2 border-white/30 rounded-md"
    >
      <img src={logo} alt="Logo"  />
      <div
        className="bg-white flex flex-col justify-center items-center p-4 rounded-md"
      >
        <h6 className="text-xs text-center leading-none font-bold text-gray-600">
          SCORE
        </h6>
        <h1 className="text-6xl font-bold text-gray-700 leading-none">{ padScore() }</h1>
      </div>
    </div>
  )
}
