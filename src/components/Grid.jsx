import Tile from "./Tile";
import '../App.css'

const Grid = ({guess, col, row, prevs, ans}) => {
    return ( 
        <div className="grid">
            <div className="row">
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={1} tileRow = {0}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={2} tileRow = {0}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={3} tileRow = {0}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={4} tileRow = {0}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={5} tileRow = {0}/>
            </div>
            <div className="row">
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={1} tileRow = {1}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={2} tileRow = {1}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={3} tileRow = {1}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={4} tileRow = {1}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={5} tileRow = {1}/>
            </div>
            <div className="row">
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={1} tileRow = {2}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={2} tileRow = {2}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={3} tileRow = {2}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={4} tileRow = {2}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={5} tileRow = {2}/>
            </div>
            <div className="row">
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={1} tileRow = {3}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={2} tileRow = {3}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={3} tileRow = {3}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={4} tileRow = {3}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={5} tileRow = {3}/>
            </div>
            <div className="row">
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={1} tileRow = {4}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={2} tileRow = {4}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={3} tileRow = {4}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={4} tileRow = {4}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={5} tileRow = {4}/>
            </div>
            <div className="row">
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={1} tileRow = {5}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={2} tileRow = {5}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={3} tileRow = {5}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={4} tileRow = {5}/>
                <Tile guess={guess} prevs={prevs} ans={ans} guessCol={col} guessRow={row} tileCol={5} tileRow = {5}/>
            </div>
        </div> 
    );
}
 
export default Grid;