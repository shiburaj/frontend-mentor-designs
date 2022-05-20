import React from 'react'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import bgTriangle from '../images/bg-triangle.svg'

export default function Play({ setUserSelection }) {
  return (
    <div
      className="flex-grow w-full min-h-[25rem] text-green-400 flex justify-center items-center"
    >
      <div
        className="relative bg-no-repeat bg-center bg-auto w-[25rem] h-[25rem]" style={{ backgroundImage: `url(${bgTriangle})` }}
      >
        <div
            onClick={() => {setUserSelection('paper') }}
          className="absolute cursor-pointer top-5 left-5 block w-28 h-28 rounded-full border-[0.9rem] border-indigo-500 bg-white hover:opacity-90 active:scale-95 transition-all duration-500 ease-in-out"
        >
          <img
            className="p-4 active:scale-95 transition-all duration-500 ease-in-out"
            src={paper}
            alt="Paper"
          />
        </div>
        <div
            onClick={() => {setUserSelection('scissors') }}
          className="absolute cursor-pointer top-5 left-[17rem] block w-28 h-28 rounded-full border-[0.9rem] border-yellow-500 bg-white hover: active:scale-95 transition-all duration-300 ease-in-out"
        >
          <img
            className="p-4 active:scale-95 transition-all duration-500 ease-in-out"
            src={scissors}
            alt="scissors"
          />
        </div>
        <div
            onClick={() => {setUserSelection('rock') }}
          className="absolute cursor-pointer top-[16rem] left-[9rem] block w-28 h-28 rounded-full border-[0.9rem] border-red-500 bg-white hover: active:scale-95 transition-all duration-300 ease-in-out"
        >
          <img
            className="p-4 active:scale-95 transition-all duration-500 ease-in-out"
            src={rock}
            alt="rock"
          />
        </div>
        
      </div>
      

    </div>
  )
}
