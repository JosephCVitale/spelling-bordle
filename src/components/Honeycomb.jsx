import '../App.css'

const Honeycomb = ({honeycomb, handleHoney}) => {

    const hexOne = honeycomb[0]?.toUpperCase();
    const hexTwo = honeycomb[1]?.toUpperCase();
    const hexThree = honeycomb[2]?.toUpperCase();
    const hexFour = honeycomb[3]?.toUpperCase();
    const hexFive = honeycomb[4]?.toUpperCase();
    const hexSix = honeycomb[5]?.toUpperCase();
    const hexSeven = honeycomb[6]?.toUpperCase();

    const handleHexClick = (hexValue) => {
        handleHoney(hexValue.toLowerCase());
    }

    return ( 
        <div className="honeycomb">
            <div>
                <div className="hexagon" onClick={()=>handleHexClick(hexOne)}>{hexOne}</div>
            </div>
            <div>
                <div className="hexagon" onClick={()=>handleHexClick(hexTwo)}>{hexTwo}</div>
                <div className="emptyspace"></div>
                <div className="hexagon" onClick={()=>handleHexClick(hexThree)}>{hexThree}</div>
            </div>
            <div>
                <div className="hexagon required" onClick={()=>handleHexClick(hexFour)}>{hexFour}</div>
            </div>
            <div>
                <div className="hexagon" onClick={()=>handleHexClick(hexFive)}>{hexFive}</div>
                <div className="emptyspace"></div>
                <div className="hexagon" onClick={()=>handleHexClick(hexSix)}>{hexSix}</div>
            </div>
            <div>
                <div className="hexagon" onClick={()=>handleHexClick(hexSeven)}>{hexSeven}</div>
            </div>
        </div> 
    );
}
 
export default Honeycomb;