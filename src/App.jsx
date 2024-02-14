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

  function generateHoneycomb(){
    let hc = [];
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    while (hc.length < 7){
      let randomIndex =  Math.floor(Math.random() * alphabet.length);
      hc.push(alphabet[randomIndex]);
      alphabet.splice(randomIndex, 1); 
    }
    return hc;
  }

  function pickAnswer(words){
    let randomIndex =  Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  useEffect(() => {
    let hc = generateHoneycomb();
    let rl = hc[requiredLetterIndex];
    let vw = [];
    let validHoneycomb = false;
    while(validHoneycomb == false) {
      for (let word in dictionary){
        if(word.length == 5 && word.includes(rl)){
          let remainingLetters = word
          for (let letter of hc){
            remainingLetters = remainingLetters.replaceAll(letter, '');
          }
          if(remainingLetters.length == 0){
            vw.push(word);
          }
        }
      }
      if(vw.length >= 20){
        validHoneycomb = true;
      } else {
        hc = generateHoneycomb();
        rl = hc[requiredLetterIndex];
        vw = [];
      }
    }
    const ans = pickAnswer(vw);
    setHoneycomb(hc);
    setValidWords(vw);
    setAnswer(ans);
    
    console.log('You are cheating!')
    console.log('honeycomb:', hc);
    console.log('required letter:', rl);
    console.log('valid words:', vw);
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
        alert("You win!");
      } else if (validWords.includes(guess) && !prevGuesses.includes(guess)){
        setRow(row => row+1);
        setPrevGuesses(prevGuesses => [...prevGuesses, guess]);
        setGuess('');
        setCol(0);
        if(row == 5){
          setLose(true);
          alert("You lose!");
        } 
      } else {
        alert('Invalid guess');
      }
    } else if (guess.length < 5 && input != 'enter'){
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

  function shuffle() {
    const requiredLetter = honeycomb[requiredLetterIndex];
    const shuffledHoneycomb = [...honeycomb];
    let currentIndex = shuffledHoneycomb.length, randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffledHoneycomb[currentIndex], shuffledHoneycomb[randomIndex]] = [
        shuffledHoneycomb[randomIndex], shuffledHoneycomb[currentIndex]];
    }
    let swapIndex = requiredLetterIndex;
    for(let i = 0; i<shuffledHoneycomb.length; i++){
      if (shuffledHoneycomb[i] == requiredLetter){
        swapIndex = i;
      }
    }
    let temp = shuffledHoneycomb[swapIndex];
    shuffledHoneycomb[swapIndex] = shuffledHoneycomb[requiredLetterIndex];
    shuffledHoneycomb[requiredLetterIndex] = temp;
    setHoneycomb(shuffledHoneycomb);
  }

  const handleHoney = (hexValue) => {
    if(hexValue == 'shuffle'){
      shuffle();
    } else {
      handleInput(hexValue);
    }
  }

  return (
    <div className="App">
      <nav>
        <h1>Spelling Bordle</h1>
      </nav>
      <Grid guess={guess} col={col} row={row} prevs={prevGuesses} ans={answer}/>
      <Honeycomb honeycomb={honeycomb} handleHoney={handleHoney}/>
    </div>
  );
}

export default App;
