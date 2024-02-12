import { useState, useEffect} from 'react'
import './App.css'
import Grid from './components/Grid'
import Honeycomb from './components/Honeycomb'

function App() {
  const validWords = [
    "avail",
    "chair",
    "chica",
    "chili",
    "chill",
    "cilia",
    "circa",
    "civic",
    "civil",
    "lilac",
    "rival",
    "villa",
    "viral",
  ];
  const answer = 'viral';

  const [guess, setGuess] = useState('');
  const [prevGuesses, setPrevGuesses] = useState([]);
  const [col, setCol] = useState(0);
  const [row, setRow] = useState(0);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      //TODO: add backspace functionality
      //TODO: handle user entering uppercase letter
      if(win || lose){
        console.log('game over');
      } else if (guess.length == 5 && event.key === 'Enter') {
        if (guess == answer){
          // winning guess
          setRow(row => row+1);
          setPrevGuesses(prevGuesses => [...prevGuesses, guess]);
          setWin(true);
          alert("You win!");
        } else if (validWords.includes(guess)){
          // incorrect guess
          console.log('valid guess');
          if(row == 5){
            setRow(row => row+1);
            setPrevGuesses(prevGuesses => [...prevGuesses, guess]);
            setLose(true);
            alert("You lose!");
          } else {
            setRow(row => row+1);
            setPrevGuesses(prevGuesses => [...prevGuesses, guess]);
          }
        } else {
          // invalid guess
          console.log('not valid guess');
        }
        setGuess('');
        setCol(0);
      } else if(guess.length < 5){
        const newGuess = guess + event.key;
        setGuess(newGuess);
        setCol(col => col + 1)
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [guess, col, row, prevGuesses]);

  // mainly for logging purposes
  
  useEffect(() => {
    console.log('Most recent guess:', guess);
  }, [guess]);
  useEffect(() => {
    console.log('col:', col);
  }, [col]);
  useEffect(() => {
    console.log('row:', row);
  }, [row]);
  /*
  useEffect(() => {
    prevGuesses.forEach((element) => console.log(element));
  }, [prevGuesses]);
  */

  return (
    <div className="App">
      <nav>
        <h1>Spelling Bordle</h1>
      </nav>
      <Grid 
        guess = {guess}
        col = {col}
        row = {row}
        prevs = {prevGuesses}
        ans = {answer}
      />
      <Honeycomb />
    </div>
  )
}

export default App
