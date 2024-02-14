import { useState, useEffect} from 'react';
import './App.css';
import Grid from './components/Grid';
import Honeycomb from './components/Honeycomb';
import dictionary from './data-files/dictionary.json'; 

function App() {

  const requiredLetterIndex = 3;

  const [guess, setGuess] = useState('');
  const [prevGuesses, setPrevGuesses] = useState([]);
  const [col, setCol] = useState(0);
  const [row, setRow] = useState(0);
  const [honeycomb, setHoneycomb] = useState([]);
  const [validWords, setValidWords] = useState([]);
  const [answer, setAnswer] = useState('');
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function generateHoneycomb(){
    let hc = [];
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    while (hc.length < 7){
      let randomIndex =  getRandomInt(alphabet.length);
      hc.push(alphabet[randomIndex]);
      alphabet.splice(randomIndex, 1); 
    }
    return hc;
  }

  function pickAnswer(vWords){
    let randomIndex =  getRandomInt(vWords.length);
    return vWords[randomIndex];
  }

  useEffect(() => {
    let hc = generateHoneycomb();
    let reqLetter = hc[requiredLetterIndex];
    let vWords = [];
    let validHoneycomb = false;
    while(validHoneycomb == false) {
      for (let word in dictionary){
        if(word.length == 5 && word.includes(reqLetter)){
          let check = word
          for (let letter of hc){
            check = check.replaceAll(letter, '');
          }
          if(check.length == 0){
            vWords.push(word);
          }
        }
      }
      if(vWords.length >= 20){
        validHoneycomb = true;
      } else {
        hc = generateHoneycomb();
        reqLetter = hc[requiredLetterIndex];
        vWords = [];
      }
    }
    const ans = pickAnswer(vWords);
    setHoneycomb(hc);
    setValidWords(vWords);
    setAnswer(ans);
    
    console.log('You are cheating!')
    console.log('honeycomb:', hc);
    console.log('required letter:', reqLetter);
    console.log('valid words:', vWords);
    console.log('answer:', ans);
  }, []); 

  const eventfulKeys = [
    "backspace", "enter",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
  ];

  function handleInput(input){
    input = input.toLowerCase();
    if (win || lose || !eventfulKeys.includes(input)){
      // do nothing
    } else if (input == 'backspace'){
      if(guess.length != 0){
        const newGuess = guess.slice(0, guess.length-1);
        setGuess(newGuess);
        setCol(col => col-1);
      }
    } else if (guess.length == 5 && input === 'enter') {
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
    } else if (guess.length < 5 && input != 'Enter'){
      const newGuess = guess + input.toLowerCase();
      setGuess(newGuess);
      setCol(col => col + 1);
    }

  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      handleInput(event.key);
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [guess, col, row, prevGuesses]);

  const handleHoney = (hexValue) => {
    if(win || lose || guess.length >= 5){
      return;
    } 
    handleInput(hexValue);
  }

  return (
    <div className="App">
      <nav>
        <h1>Spelling Bordle</h1>
      </nav>
      <Grid guess={guess} col={col} row={row} prevs={prevGuesses} ans={answer} />
      <Honeycomb honeycomb={honeycomb} handleHoney={handleHoney}/>
    </div>
  )
}

export default App;
