import '../App.css'

const Honeycomb = ({honeycomb}) => {

    const hexOne = honeycomb[0]?.toUpperCase();
    const hexTwo = honeycomb[1]?.toUpperCase();
    const hexThree = honeycomb[2]?.toUpperCase();
    const hexFour = honeycomb[3]?.toUpperCase();
    const hexFive = honeycomb[4]?.toUpperCase();
    const hexSix = honeycomb[5]?.toUpperCase();
    const hexSeven = honeycomb[6]?.toUpperCase();

    return ( 
        <div className="honeycomb">
            <div>
                <div className="hexagon">{hexOne}</div>
            </div>
            <div>
                <div className="hexagon">{hexTwo}</div>
                <div className="emptyspace"></div>
                <div className="hexagon">{hexThree}</div>
            </div>
            <div>
                <div className="hexagon required">{hexFour}</div>
            </div>
            <div>
                <div className="hexagon">{hexFive}</div>
                <div className="emptyspace"></div>
                <div className="hexagon">{hexSix}</div>
            </div>
            <div>
                <div className="hexagon">{hexSeven}</div>
            </div>
        </div>


        
    );
}
 
export default Honeycomb;