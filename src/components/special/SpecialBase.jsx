import React from "react";
import "./SpecialBase.scss";

const SpecialBase = (props) => {
        return(
            <div className="special_base">
                <div className="special_left">
                    <div className="special_left_content">
                        <h1>HON <span className="red_letter">SUSHI</span><br/>SPECIAL</h1>
                        <a href="#special" className="right_arrow_button" onClick={() => props.handlePage("specialSetMenu")}><span></span>Click</a>
                    </div>
                </div>
                <div className="special_right">
                    <div className="special_right_content">
                        <h1>HAPPY <span className="red_letter">HOUR</span><br/>SPECIAL</h1>
                        <a href="#special" className="left_arrow_button" onClick={() => props.handlePage("specialHappyHour")}><span></span>Click</a>
                    </div>
                </div>
            </div>
        );
}

export default SpecialBase;