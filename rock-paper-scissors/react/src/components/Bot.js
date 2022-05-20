import React, { useEffect } from 'react'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import { useState } from 'react'

export default function Bot({ setComputerSelection, userSelection, computerSelection }) {
    const userSelected = (userSelection === 'rock') ? rock : (userSelection === 'paper') ? paper : scissors
    const [tempSel, setTempSel] = useState(null)
    const computerSelected = () => {
        const random = Math.random()
        if (random < 0.33) {
            return 'rock'
        } else if (random < 0.66) {
            return 'paper'
        } else {
            return 'scissors'
        }
    }

    useEffect(() => {
        if (userSelection != null && computerSelection == null) {
            setTimeout(() => {
                let sel = computerSelected();
                sel === 'paper' ? setTempSel(paper) : sel === 'rock' ? setTempSel(rock) : setTempSel(scissors)
                setTimeout(() => {
                    setComputerSelection(sel)
                    
                }, 1000);
                  
            }, 1000);
            
        }
    }, [userSelection, computerSelection])

  return (
    <div className="flex flex-grow justify-around items-center w-full max-w-3xl gap-2 mx-auto">
        <div className="text-center">
          <h2
            className="text-center text-xl font-bold uppercase text-gray-100 mb-6"
          >
            You picked
          </h2>
          <div
            className="cursor-pointer block w-36 h-36 rounded-full border-[1rem] border-indigo-500 bg-white"
          >
            <img className="p-7" src={userSelected} alt=""  />
          </div>
        </div>
        <div className="text-center animate-pulse">
          <h2
            className="text-center text-xl font-bold uppercase text-gray-100 mb-6"
          >
            THE House picked
          </h2>
          <div
            className="cursor-pointer mx-auto block w-36 h-36 rounded-full border-[1rem] border-gray-500 bg-white"
          >
            <img className="p-7" src={tempSel} alt=""  />
          </div>
        </div>
      </div>
  )
}
