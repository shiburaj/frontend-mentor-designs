import './App.css';
import Score from './components/Score';
import { useState } from 'react';
import Play from './components/Play';
import Rules from './components/Rules';
import Bot from './components/Bot';
import Result from './components/Result';

function App() {
  const [score, setScore] = useState(0);
  const [userSelection, setUserSelection] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  const playAgain = () => {
    setUserSelection(null);
    setComputerSelection(null);
  }

  const playerWon = () => {
    setScore(score + 1);
  }

  return (
    <div className="relative App flex flex-col min-h-screen" >
      <Score score={score} />
      {(userSelection == null && computerSelection == null) ? (
      <Play setUserSelection={setUserSelection} />
      ) : null}
      {(userSelection != null && computerSelection == null) ? (
      <Bot setComputerSelection={setComputerSelection} userSelection={userSelection} computerSelection={computerSelection} />
      ) : null}
      {(userSelection != null && computerSelection != null) ? (
      <Result playerWon={playerWon} userSelection={userSelection} computerSelection={computerSelection} playAgain={playAgain} />
      ) : null}
      <Rules />
    </div>
  );
}

export default App;
