import React, { useEffect } from 'react'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'
import { useState } from 'react'

export default function Result({ userSelection, computerSelection, playAgain, playerWon }) {
  const [result, setResult] = useState('Checking...')
    const userSelected = (userSelection === 'rock') ? rock : (userSelection === 'paper') ? paper : scissors
    const computerSelected = (computerSelection === 'rock') ? rock : (computerSelection === 'paper') ? paper : scissors
    const checkResult = () => {
        if (userSelection === 'rock') {
            return computerSelection === 'rock' ? 'draw' : computerSelection === 'paper' ? 'you lose' : 'you win'
        } else if (userSelection === 'paper') {
            return computerSelection === 'rock' ? 'you win' : computerSelection === 'paper' ? 'draw' : 'you lose'
        } else {
            return computerSelection === 'rock' ? 'you lose' : computerSelection === 'paper' ? 'you win' : 'draw'
        }
    }

    useEffect(() => {
        console.log('hello')
        if (userSelection != null && computerSelection != null) {
            setTimeout(() => {
                setResult(checkResult())
                console.log("Won By: " + result)
                if(result === 'you win') {
                    playerWon()
                }
            }, 500);
        }
    }, [result, userSelection, computerSelection])

  return (
    <div
        className="flex flex-grow justify-around items-center w-full max-w-3xl gap-8 mx-auto flex-wrap"
      >
        <div className={`text-center order-1 sm:order-1 ${result==='you win'?'animate-special':''}`}>
          <h2
            className="text-center text-base font-bold uppercase text-gray-100 mb-6"
          >
            You picked
          </h2>
          <div
            className="cursor-pointer block w-36 h-36 rounded-full border-[1rem] border-indigo-500 bg-white"
          >
            <img className="p-7" src={userSelected} alt=""  />
          </div>
        </div>

        <div className="order-3 sm:order-2 text-center mx-auto animate-pulse">
          <h1 className="text-white text-3xl uppercase font-bold">{ result }</h1>
          <button
            onClick={playAgain}
            className="block bg-white w-full rounded text-red-500 py-1 text-sm mt-4"
          >
            PLAY AGAIN
          </button>
        </div>
        <div className={`text-center order-2 sm:order-3 ${result==='you lose'?'animate-special':''}`}>
          <h2
            className="text-center text-base font-bold uppercase text-gray-100 mb-6"
          >
            THE House picked
          </h2>
          <div
            className="cursor-pointer mx-auto block w-36 h-36 rounded-full border-[1rem] border-red-500 bg-white"
          >
            <img className="p-7" src={computerSelected} alt=""  />
          </div>
        </div>
      </div>
  )
}
