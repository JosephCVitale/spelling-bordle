import { useState, useEffect} from 'react';
import '../App.css'

const Honeycomb = ({honeycomb, handleHoney}) => {

    const [hexValues, setHexValues] = useState(Array(7).fill(''));

    useEffect(() => {
        setHexValues(honeycomb.map(hex => hex?.toUpperCase() || ''));
    }, [honeycomb]);

    const handleHexClick = (hexValue) => {
        handleHoney(hexValue.toLowerCase());
    }

    return ( 
        <div className="honeycomb">
            <div>
                <div className="hexagon" onClick={()=>handleHexClick(hexValues[0])}>{hexValues[0]}</div>
            </div>
            <div>
                <div className="hexagon" onClick={()=>handleHexClick(hexValues[1])}>{hexValues[1]}</div>
                <div className="emptyspace"></div>
                <div className="hexagon" onClick={()=>handleHexClick(hexValues[2])}>{hexValues[2]}</div>
            </div>
            <div>
                <div className="hexagon required" onClick={()=>handleHexClick(hexValues[3])}>{hexValues[3]}</div>
            </div>
            <div>
                <div className="hexagon" onClick={()=>handleHexClick(hexValues[4])}>{hexValues[4]}</div>
                <div className="emptyspace"></div>
                <div className="hexagon" onClick={()=>handleHexClick(hexValues[5])}>{hexValues[5]}</div>
            </div>
            <div>
                <div className="hexagon" onClick={()=>handleHexClick(hexValues[6])}>{hexValues[6]}</div>
            </div>
            <br></br>
            <div>
                <div className="honeyControl" onClick={()=>handleHexClick('Backspace')}>Delete</div>
                <div className="emptyspace2"></div>
                <div className="shuffle" onClick={()=>handleHexClick('shuffle')}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </div>
                <div className="emptyspace2"></div>
                <div className="honeyControl" onClick={()=>handleHexClick('Enter')}>Enter</div>
            </div>
        </div> 
    );
}
 
export default Honeycomb;