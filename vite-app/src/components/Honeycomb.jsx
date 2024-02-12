import '../App.css'

const Honeycomb = () => {
    return ( 
        <div className="honeycomb">
            <div>
                <div className="hexagon">A</div>
            </div>
            <div>
                <div className="hexagon">C</div>
                <div className="emptyspace"></div>
                <div className="hexagon">H</div>
            </div>
            <div>
                <div className="hexagon required">I</div>
            </div>
            <div>
                <div className="hexagon">L</div>
                <div className="emptyspace"></div>
                <div className="hexagon">R</div>
            </div>
            <div>
                <div className="hexagon">V</div>
            </div>
        </div>


        
    );
}
 
export default Honeycomb;