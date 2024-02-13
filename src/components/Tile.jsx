import {useState, useEffect} from 'react'
import '../App.css'

const Tile = ({guess, prevs, guessCol, guessRow, tileCol, tileRow, ans}) => {
    const [content, setContent] = useState(<div>&#8203;</div>);

    useEffect(() => {
        if (guessCol === tileCol && guessRow === tileRow) {
            const letter = guess.charAt(tileCol-1);
            setContent(<div>{letter}</div>);
        } else if (guessRow > tileRow){
            const prevGuess = prevs[tileRow];
            const letter = prevGuess.charAt(tileCol-1);
            const ansLetter = ans.charAt(tileCol-1);
            if(letter == ansLetter){
                setContent(<div style={{backgroundColor: "forestgreen"}}>{letter}</div>);
            } else if(ans.includes(letter)){
                let check = ans;
                for (let i = 0; i < tileCol-1; i++){
                    check = check.replace(prevGuess.charAt(i), '');
                }
                if (check.includes(letter)){
                    setContent(<div style={{backgroundColor: "goldenrod"}}>{letter}</div>);
                } else {
                    setContent(<div style={{backgroundColor: "dimgray"}}>{letter}</div>);
                }
            } else {
                setContent(<div style={{backgroundColor: "dimgray"}}>{letter}</div>);
            } 
        } else if (guessCol < tileCol) {
            setContent(<div>&#8203;</div>);
        }
    }, [guess, prevs, guessCol, guessRow, tileCol, tileRow]);

    return ( 
        <div className = "tile">
            {content}
        </div>
     );
}
 
export default Tile;