import { useState, useEffect} from 'react'
import './App.css'
import Grid from './components/Grid'
import Honeycomb from './components/Honeycomb'

function App() {
  
  const eventfulKeys = [
    "Backspace", "Enter",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
  ];

  // TODO: replace hard coded values with randomly generated
  const validWords = [ "avail", "chair", "chica", "chili", "chill", "cilia", "circa", "civic", "civil", "lilac", "rival", "villa", "viral"];
  const answer = 'viral';

  const [guess, setGuess] = useState('');
  const [prevGuesses, setPrevGuesses] = useState([]);
  const [col, setCol] = useState(0);
  const [row, setRow] = useState(0);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (win || lose || !eventfulKeys.includes(event.key)){
        // do nothing
      } else if (event.key === 'Backspace'){
        if(guess.length != 0){
          const newGuess = guess.slice(0, guess.length-1);
          setGuess(newGuess);
          setCol(col => col-1);
        }
      } else if (guess.length == 5 && event.key === 'Enter') {
        if (guess == answer){
          setRow(row => row+1);
          setCol(0)
          setPrevGuesses(prevGuesses => [...prevGuesses, guess]);
          setWin(true);
          //alert("You win!");
        } else if (validWords.includes(guess) && !prevGuesses.includes(guess)){
          setRow(row => row+1);
          setPrevGuesses(prevGuesses => [...prevGuesses, guess]);
          setGuess('');
          setCol(0);
          if(row == 5){
            setLose(true);
            //alert("You lose!");
          } 
        } else {
          //alert('Invalid word');
        }
      } else if (guess.length < 5){
        const newGuess = guess + event.key.toLowerCase();
        setGuess(newGuess);
        setCol(col => col + 1);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [guess, col, row, prevGuesses]);

  // TODO: remove, for temporary logging purposes
  /*
  useEffect(() => {
    console.log('Most recent guess:', guess);
  }, [guess]);
  useEffect(() => {
    console.log('col:', col);
  }, [col]);
  useEffect(() => {
    console.log('row:', row);
  }, [row]);
  useEffect(() => {
    prevGuesses.forEach((element) => console.log(element));
  }, [prevGuesses]);
  */

  return (
    <div className="App">
      <nav>
        <h1>Spelling Bordle</h1>
      </nav>
      <Grid guess = {guess} col = {col} row = {row} prevs = {prevGuesses} ans = {answer} />
      <Honeycomb />
    </div>
  )
}

export default App
