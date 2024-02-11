import Row from "./Row";
import Tile from "./Tile";
import '../App.css'

const Grid = () => {
    return ( 
        <div className="grid">
            <div className="row">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
            </div>

            <div className="row">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
            </div>

            <div className="row">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
            </div>

            <div className="row">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
            </div>

            <div className="row">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
            </div>

            <div className="row">
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
                <Tile/>
            </div>

        </div> 
    );
}
 
export default Grid;