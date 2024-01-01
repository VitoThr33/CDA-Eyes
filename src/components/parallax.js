import { useState } from "react";

function Parallax () {

    const [background, setBackground] = useState(20)

    return (  
        <div className="parallax-outer">
            <div className="parallax" style={{ background: `linear-gradient(#E8985E, #A9714B ${background}%, #54442B, #262A10)` }}>
                <img className="guy-rock" src="/kuntz/guy-rock.png"/>
                <img className="trees-left" src="/kuntz/trees-left.png"/>
                <img className="trees-right" src="/kuntz/trees-right.png"/>
                <img className="water" src="/kuntz/water.png"/>
                <img className="mountains" src="/kuntz/mountains.png"/>
                <img className="sky" src="/kuntz/sky.png"/>
                
            </div>
        </div>
    );
}
 
export default Parallax;