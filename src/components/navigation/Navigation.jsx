import React from "react";
import "./Navigation.scss";
import "../../css/common.scss";

class Navigation extends React.Component {
    render() {
        return(
            <nav>
                <div className="logo">HON <span className="logo_sushi">SUSHI</span></div>
                <div className="nav_left">
                    <ul>
                        <li><a href="#HOME">HOME</a></li>
                        <li><a href="#ABOUT">ABOUT</a></li>
                        <li><a href="#SPECIAL">SPECIAL</a></li>
                        <li><a href="#LOCATION">LOCATION</a></li>
                        <li className="orderNav"><a href="#ORDER">ORDER</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;