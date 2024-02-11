import '../App.css'

const Honeycomb = () => {
    return ( 
        <div className="honeycomb">
            <div>
                <div className="hexagon">J</div>
            </div>
            <div>
                <div className="hexagon">M</div>
                <div className="emptyspace"></div>
                <div className="hexagon">N</div>
            </div>
            <div>
                <div className="hexagon required">I</div>
            </div>
            <div>
                <div className="hexagon">A</div>
                <div className="emptyspace"></div>
                <div className="hexagon">G</div>
            </div>
            <div>
                <div className="hexagon">U</div>
            </div>
        </div>


        
    );
}
 
export default Honeycomb;