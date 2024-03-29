import {useState, useEffect} from 'react'
import '../App.css'

const Tile = ({guess, prevs, guessCol, guessRow, tileCol, tileRow, ans}) => {
    const [content, setContent] = useState(<div>&#8203;</div>);

    useEffect(() => {
        if (guessCol === tileCol && guessRow === tileRow) {
            const letter = guess.charAt(tileCol-1);
            setContent(<div>{letter.toUpperCase()}</div>);
        } else if (guessRow > tileRow){
            const rowGuess = prevs[tileRow];
            const tileLetter = rowGuess.charAt(tileCol-1);
            const ansLetter = ans.charAt(tileCol-1);
            if(tileLetter == ansLetter){
                setContent(<div style={{backgroundColor: "forestgreen"}}>{tileLetter.toUpperCase()}</div>);
            } else if (!ans.includes(tileLetter)) {
                setContent(<div style={{backgroundColor: "dimgray"}}>{tileLetter.toUpperCase()}</div>);
            } else {
                let remainingLetters = ans;
                for (let i = tileCol; i<rowGuess.length; i++){
                    if(ans.charAt(i) == rowGuess.charAt(i)){
                        let correctTile = rowGuess.charAt(i);
                        remainingLetters = remainingLetters.replace(correctTile, '');
                    }
                }
                for (let i = 0; i < tileCol-1; i++){
                    remainingLetters = remainingLetters.replace(rowGuess.charAt(i), '');
                }
                if (remainingLetters.includes(tileLetter)){
                    setContent(<div style={{backgroundColor: "goldenrod"}}>{tileLetter.toUpperCase()}</div>);
                } else {
                    setContent(<div style={{backgroundColor: "dimgray"}}>{tileLetter.toUpperCase()}</div>);
                }
            } 
        } else if (guessCol < tileCol){
            setContent(<div>&#8203;</div>);
        }
    }, [guess, guessRow, guessCol]);

    return ( 
        <div className = "tile">
            {content}
        </div>
     );
}
 
export default Tile;