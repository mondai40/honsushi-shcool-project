import React from "react";
import "./Navigation.scss";

class Navigation extends React.Component {
    render() {
        return(
            <nav className="nav_container">
                <div className="logo"><a href="#home">HON <span className="logo_sushi">SUSHI</span></a></div>
                <div className="nav_left">
                    <ul>
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#special">SPECIAL</a></li>
                        <li><a href="#location">LOCATION</a></li>
                        <li className="orderNav"><a href="#ORDER">ORDER</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;